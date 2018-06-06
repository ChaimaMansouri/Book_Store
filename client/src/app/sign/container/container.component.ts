import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit,AfterContentChecked } from '@angular/core';
import { ModalService } from 'ng-bootstrap-modal';
import { Observable } from 'rxjs/Observable';
import {CrudserviceService} from '../service/crudservice.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  books:any;
  allBook=true;
  bookOne:any;
  bookByGenre:any
  prevBook:any;
  search:any;
  prevsearch:any;
  constructor(private crudservice: CrudserviceService, private router:Router, private actrout:ActivatedRoute) { }

  goToDetails(id){
    this.crudservice.getBook(id).subscribe(res=>this.bookOne=res);
    this.allBook=false;
  }


  ngOnInit() {
    this.actrout.params.subscribe(params=>{
      this.bookByGenre=params['genre']
    this.search=params['search']});
if(this.bookByGenre!=null){
  this.prevBook=this.bookByGenre;
  this.books=this.crudservice.getBooksByGenre(this.bookByGenre);
}
else{
  this.crudservice.getAllBooks().subscribe(res=>this.books=res);
}
if(this.search!=null){
  this.prevsearch=this.search;
  var serchedBooks=[]
    this.crudservice.getAllBooks().subscribe(res=>{
      res.forEach(ele=>{
        var ti=ele.title.toLowerCase();
        var s=this.search.toLowerCase();
        if(ti.indexOf(s)!=-1)
        {
         serchedBooks.push(ele);
        }
      });
      if(serchedBooks.length>0){
        this.books=serchedBooks;
      }
      else{
        this.books=[];
      }
    })
  
}
}
ngAfterContentChecked(){
if(this.bookByGenre!=null && this.bookByGenre!=this.prevBook)
{
  this.prevBook=this.bookByGenre;
  this.books=this.crudservice.getBooksByGenre(this.bookByGenre);
}
if(this.search!=null && this.search!=this.prevsearch){
  var serchedBooks=[]
  this.prevsearch=this.search;
    this.crudservice.getAllBooks().subscribe(res=>{
      res.forEach(ele=>{
        if(ele.title.indexOf(this.search)!=-1)
        {
         serchedBooks.push(ele);
        }
      });
      if(serchedBooks.length>0){
        this.books=serchedBooks;
      }
      else{
        this.books=[];
      }
    })
  
}
}
  
  removeBook(id){
    this.crudservice.deleteBook(id).subscribe(
      res=>{console.log(res)
  window.location.reload();});
  }
}

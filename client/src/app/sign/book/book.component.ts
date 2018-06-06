import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CrudserviceService} from '../service/crudservice.service';
import {Book} from '../book';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
genres:any;
book=new Book;
new_book:Book=null;
updatedBook:Book
id:String
  constructor(private crudservice:CrudserviceService, private router:Router, private routeActivated:ActivatedRoute) {
   }
  add_book(){
    this.crudservice
    .createBook(this.book).subscribe(r => {
      this.new_book = r
      this.router.navigateByUrl('/');
    })
    if (this.new_book!=null){
      this.book=new Book;
      this.new_book=null;
    }
  }
  update_book(){
    this.crudservice.updateBook(this.id,this.updatedBook).subscribe(res=>{console.log(res),
    this.router.navigateByUrl('/')});
  }
  ngOnInit() {
  this.crudservice.getAllGenres().subscribe(res=>this.genres=res);
  this.routeActivated.params.subscribe(params=>this.id=params['id']);
  if(this.id!=null)
  {
   this.crudservice.getBook(this.id).subscribe(res=>this.updatedBook=res);
  }
  }
}

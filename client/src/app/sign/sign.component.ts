import { Router } from '@angular/router';
import { Genre } from './genre';
import { Component,OnInit,AfterViewChecked } from '@angular/core';
import { ModalService } from 'ng-bootstrap-modal';
import {CrudserviceService} from './service/crudservice.service';


@Component({
  selector: 'sign',
  templateUrl: './sign.component.html'
})
export class SignComponent {
genres:any;
dom:any;
updatedGenre=new Genre;
id=null
searchBook=""
  constructor(private crudservice:CrudserviceService, private router:Router) {
  this.crudservice.getAllGenres()
                  .subscribe(res=>this.genres=res);

   }
   ngOnInit() {
  }

deleteGenre(id,name){
  this.crudservice.deleteGenre(id);
  this.crudservice.getAllGenres().subscribe(res=>{this.genres=res;
  window.location.reload();    
   });
  
}


updateGenre(id){
this.id=id;
}
genreUpdate(event,name){
  event.preventDefault();
  if (event.keyCode === 13) {
    this.updatedGenre.name=name;
    this.crudservice.updateGenre(this.id,this.updatedGenre)
    this.updatedGenre=new Genre;
    this.id=null;
}}
}

import { Router } from '@angular/router';
import { Genre } from './../genre';
import { CrudserviceService } from './../service/crudservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
genre=new Genre;
new_genre:Genre=null;
  constructor( private crudservice:CrudserviceService, private router:Router) {
  }

  ngOnInit() {
  }
  add_genre() {
    this.crudservice.createGenre(this.genre)
                  .subscribe(res=>{this.new_genre=res,this.genre=new Genre,
                document.location.reload();})
    
    
}

}

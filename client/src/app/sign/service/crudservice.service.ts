import { Genre } from './../genre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';
@Injectable()
export class CrudserviceService {

  constructor(private http: HttpClient) { }
  getAllGenres(){
    return this.http.get<Genre[]>("/genres");
  }
  getAllBooks(){
    return this.http.get<Book[]>("/books");
  }
  createBook(book:Book){
    return this.http.post<Book>("/books",book);
  }
  createGenre(genre:Genre){
    return this.http.post<Genre>("/genres",genre);
  }
  deleteGenre(id){
    var old_genre=new Genre;
    this.getGenre(id).subscribe(res=> {
      old_genre=res;
      this.getAllBooks().subscribe(res=>{
        res.forEach(ele => {
          if(ele.genre==old_genre.name)
          {
            this.deleteBook(ele._id).subscribe(res=>{
              console.log(res)
            });
          }
        });
    return this.http.delete<Genre>("/genres/"+id).subscribe(res=>console.log(res));
  })
})
  }
  deleteBook(id){
    return this.http.delete<Book>("/books/"+id);
  }
  getBook(id){
    return this.http.get<Book>("/books/"+id);
  }
  getGenre(id){
    return this.http.get<Genre>("/genres/"+id);
  }
  updateBook(id,book){
    return this.http.put<Book>("/books/"+id,book);
  }
  updateGenre(id,new_genre){
    var old_genre=new Genre;
    this.getGenre(id).subscribe(res=> {
      old_genre=res;
      this.getAllBooks().subscribe(res=>{
        res.forEach(ele => {
          if(ele.genre==old_genre.name)
          {
            ele.genre=new_genre.name;
            this.updateBook(ele._id,ele).subscribe(res=>{
              console.log(res)
            });
          }
        });
        this.http.put<Genre>("/genres/"+id,new_genre).subscribe(res=>{console.log(res);});                  
    })
    })
    
  }

  getBooksByGenre(name){
   var books=new Array<Book>();
    this.getAllBooks().subscribe(res=>{
      res.forEach(ele => {
        if(ele.genre==name)
        {
          books.push(ele)
        }
      });
  })
  return books;
}}

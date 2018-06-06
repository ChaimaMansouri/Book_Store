import { SignComponent } from './sign.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudserviceService } from './service/crudservice.service';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { AuthGuard } from '../_guards/index';



  export const signRoutes: Routes = [
    { path: 'container',component: SignComponent,
      children: [
        { path: 'book', component: BookComponent },
        { path: 'addgenre', component: GenreComponent },        
        { path: '',component: ContainerComponent},
        { path: ':genre',component: ContainerComponent},
        { path: 'bookSearch/:search',component: ContainerComponent},  
        { path: 'book/:id', component: BookComponent }
      ],canActivate: [AuthGuard]
    }
  ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signRoutes),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    BookComponent,
    GenreComponent,
    ContainerComponent,
    SignComponent,
  ],
  providers:[
    CrudserviceService
  ],
  exports: [
    BookComponent,
    GenreComponent,
    ContainerComponent,
    SignComponent
  ]
})
export class SignModule { }

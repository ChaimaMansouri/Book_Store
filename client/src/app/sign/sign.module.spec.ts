import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { CrudserviceService } from './service/crudservice.service';
import { SignComponent } from './sign.component';
import { SignModule, signRoutes } from './sign.module';
import { TestBed } from '@angular/core/testing';
import { GenreComponent } from './genre/genre.component';
import { BookComponent } from './book/book.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('SignModule', () => {
  let signModule: SignModule;

  beforeEach(() => {
    signModule = new SignModule();
    TestBed.configureTestingModule({
      imports: [RouterModule,FormsModule,HttpClientModule, RouterTestingModule],
      declarations: [ SignComponent,
        BookComponent,
        GenreComponent,
        ContainerComponent ],
     providers: [CrudserviceService]
    })
    .compileComponents();
  });

  it('should create an instance', () => {
    expect(signModule).toBeTruthy();
  });
});

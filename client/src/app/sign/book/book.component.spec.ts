
import { HttpClientModule } from '@angular/common/http';
import { CrudserviceService } from './../service/crudservice.service';
import { FormsModule } from '@angular/forms';
import { SignComponent } from './../sign.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule} from '@angular/router';
import { BookComponent } from './book.component';
import { signRoutes } from '../sign.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports:[RouterTestingModule,FormsModule,HttpClientModule],
     providers: [CrudserviceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

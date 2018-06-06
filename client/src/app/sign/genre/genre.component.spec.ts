
import { CrudserviceService } from './../service/crudservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { GenreComponent } from './genre.component';
import { signRoutes } from '../sign.module';

describe('GenreComponent', () => {
  let component: GenreComponent;
  let fixture: ComponentFixture<GenreComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreComponent ],
      imports: [FormsModule,HttpClientModule, RouterTestingModule],
      providers: [CrudserviceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

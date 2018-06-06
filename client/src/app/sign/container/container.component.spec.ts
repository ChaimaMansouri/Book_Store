import { HttpClientModule } from '@angular/common/http';
import { CrudserviceService } from './../service/crudservice.service';
import { FormsModule } from '@angular/forms';
import { SignComponent } from './../sign.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule,FormsModule,HttpClientModule, RouterTestingModule],
      declarations: [ SignComponent, ContainerComponent ],
     providers: [CrudserviceService]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    beforeEach(async(() => {
    expect(component).toBeTruthy();
  }))
})
})

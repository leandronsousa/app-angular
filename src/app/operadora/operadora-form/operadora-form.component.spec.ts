import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoraFormComponent } from './operadora-form.component';

describe('OperadoraFormComponent', () => {
  let component: OperadoraFormComponent;
  let fixture: ComponentFixture<OperadoraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadoraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

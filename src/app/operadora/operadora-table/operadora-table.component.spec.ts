import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoraTableComponent } from './operadora-table.component';

describe('OperadoraTableComponent', () => {
  let component: OperadoraTableComponent;
  let fixture: ComponentFixture<OperadoraTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadoraTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadoraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

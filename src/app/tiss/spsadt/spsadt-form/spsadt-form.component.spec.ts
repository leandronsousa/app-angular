import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsadtFormComponent } from './spsadt-form.component';

describe('SpsadtFormComponent', () => {
  let component: SpsadtFormComponent;
  let fixture: ComponentFixture<SpsadtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpsadtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpsadtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

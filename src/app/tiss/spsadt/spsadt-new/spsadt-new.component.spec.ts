import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsadtNewComponent } from './spsadt-new.component';

describe('SpsadtNewComponent', () => {
  let component: SpsadtNewComponent;
  let fixture: ComponentFixture<SpsadtNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpsadtNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpsadtNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

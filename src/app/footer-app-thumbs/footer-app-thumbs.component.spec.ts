import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAppThumbsComponent } from './footer-app-thumbs.component';

describe('FooterAppThumbsComponent', () => {
  let component: FooterAppThumbsComponent;
  let fixture: ComponentFixture<FooterAppThumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAppThumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAppThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

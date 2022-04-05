import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdskillsComponent } from './hdskills.component';

describe('HdskillsComponent', () => {
  let component: HdskillsComponent;
  let fixture: ComponentFixture<HdskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

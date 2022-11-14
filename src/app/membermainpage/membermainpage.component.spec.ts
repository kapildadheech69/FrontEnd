import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembermainpageComponent } from './membermainpage.component';

describe('MembermainpageComponent', () => {
  let component: MembermainpageComponent;
  let fixture: ComponentFixture<MembermainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembermainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembermainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

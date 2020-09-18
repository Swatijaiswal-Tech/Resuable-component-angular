import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarationFormComponent } from './registaration-form.component';

describe('RegistarationFormComponent', () => {
  let component: RegistarationFormComponent;
  let fixture: ComponentFixture<RegistarationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarationFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

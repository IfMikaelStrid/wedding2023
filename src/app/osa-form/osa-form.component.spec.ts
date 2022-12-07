import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaFormComponent } from './osa-form.component';

describe('OsaFormComponent', () => {
  let component: OsaFormComponent;
  let fixture: ComponentFixture<OsaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

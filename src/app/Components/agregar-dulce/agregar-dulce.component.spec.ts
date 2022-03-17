import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDulceComponent } from './agregar-dulce.component';

describe('AgregarDulceComponent', () => {
  let component: AgregarDulceComponent;
  let fixture: ComponentFixture<AgregarDulceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDulceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

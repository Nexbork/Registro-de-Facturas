import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazdeopcionesComponent } from './interfazdeopciones.component';

describe('InterfazdeopcionesComponent', () => {
  let component: InterfazdeopcionesComponent;
  let fixture: ComponentFixture<InterfazdeopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazdeopcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfazdeopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

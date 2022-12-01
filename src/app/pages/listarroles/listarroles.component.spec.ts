import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarrolesComponent } from './listarroles.component';

describe('ListarrolesComponent', () => {
  let component: ListarrolesComponent;
  let fixture: ComponentFixture<ListarrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarrolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

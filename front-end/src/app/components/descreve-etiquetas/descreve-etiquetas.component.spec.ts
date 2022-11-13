import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescreveEtiquetasComponent } from './descreve-etiquetas.component';

describe('DescreveEtiquetasComponent', () => {
  let component: DescreveEtiquetasComponent;
  let fixture: ComponentFixture<DescreveEtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescreveEtiquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescreveEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

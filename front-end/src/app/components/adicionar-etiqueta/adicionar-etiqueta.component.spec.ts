import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEtiquetaComponent } from './adicionar-etiqueta.component';

describe('AdicionarEtiquetaComponent', () => {
  let component: AdicionarEtiquetaComponent;
  let fixture: ComponentFixture<AdicionarEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

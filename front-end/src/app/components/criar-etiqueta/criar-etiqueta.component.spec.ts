import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEtiquetaComponent } from './criar-etiqueta.component';

describe('CriarEtiquetaComponent', () => {
  let component: CriarEtiquetaComponent;
  let fixture: ComponentFixture<CriarEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

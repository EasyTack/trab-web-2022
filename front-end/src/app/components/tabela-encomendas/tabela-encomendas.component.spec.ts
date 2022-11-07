import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEncomendasComponent } from './tabela-encomendas.component';

describe('TabelaEncomendasComponent', () => {
  let component: TabelaEncomendasComponent;
  let fixture: ComponentFixture<TabelaEncomendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaEncomendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaEncomendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

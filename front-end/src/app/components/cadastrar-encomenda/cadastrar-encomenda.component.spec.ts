import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEncomendaComponent } from './cadastrar-encomenda.component';

describe('CadastrarEncomendaComponent', () => {
  let component: CadastrarEncomendaComponent;
  let fixture: ComponentFixture<CadastrarEncomendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEncomendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

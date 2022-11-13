import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from 'src/material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';
import { TabelaEncomendasComponent } from './components/tabela-encomendas/tabela-encomendas.component';
import { CadastrarEncomendaComponent } from './components/cadastrar-encomenda/cadastrar-encomenda.component';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { TransportadorasComponent } from './pages/transportadoras/transportadoras.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CriarEtiquetaComponent } from './components/criar-etiqueta/criar-etiqueta.component';
import { DescreveEtiquetasComponent } from './components/descreve-etiquetas/descreve-etiquetas.component';
import { AdicionarEtiquetaComponent } from './components/adicionar-etiqueta/adicionar-etiqueta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    EncomendasComponent,
    TabelaEncomendasComponent,
    CadastrarEncomendaComponent,
    ConfiguracaoComponent,
    TransportadorasComponent,
    FiltrosComponent,
    CriarEtiquetaComponent,
    DescreveEtiquetasComponent,
    AdicionarEtiquetaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

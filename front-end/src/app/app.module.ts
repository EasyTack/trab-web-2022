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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    EncomendasComponent,
    TabelaEncomendasComponent,
    CadastrarEncomendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

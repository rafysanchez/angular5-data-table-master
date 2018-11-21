import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService} from './app.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import './rxjs-operators';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { RecadosComponent } from './recados/recados.component';
import { EventosComponent } from './eventos/eventos.component';
import { MoradoresVisitantesComponent } from './moradores-visitantes/moradores-visitantes.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SobreComponent } from './sobre/sobre.component';
import { AjudaComponent } from './ajuda/ajuda.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    VeiculosComponent,
    RecadosComponent,
    EventosComponent,
    MoradoresVisitantesComponent,
    OcorrenciasComponent,
    RelatoriosComponent,
    SobreComponent,
    AjudaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

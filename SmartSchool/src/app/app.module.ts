import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [	
    AppComponent,
    AlunosComponent,
    ProfessoresComponent,
    NavComponent,
    CardComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

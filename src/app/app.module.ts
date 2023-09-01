import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { jsonPlaceHolder } from './Services/jsonplaceholder.service';
import { HttpClientModule } from "@angular/common/http";
import { FormularioPstComponent } from './formulario-pst/formulario-pst.component';
import { FormularioPutComponent } from './formulario-put/formulario-put.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioPstComponent,
    FormularioPutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [jsonPlaceHolder],
  bootstrap: [AppComponent]
})
export class AppModule { }

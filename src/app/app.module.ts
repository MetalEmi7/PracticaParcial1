import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Agregado
import { DatosService } from "./servicios/datos.service"; 
/*Cuando el servicio ya fue generado, debe ser importado en el modulo, 
luego agregado al array 'providers' en este mismo archivo.*/

import { Ng2SmartTableModule } from 'ng2-smart-table';   
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

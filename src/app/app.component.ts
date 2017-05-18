import { Component } from '@angular/core'; //Para realizar peticiones; Respetar Mayusculas.
import 'rxjs/add/operator/toPromise';      //Nos provee herramientos para manejar datos.
import { Ng2SmartTableModule, LocalDataSource  } from 'ng2-smart-table';

import { DatosService } from "./servicios/datos.service";
/* Luego de haber importado en el modulo, se hace lo mismo aca.
Tal como se hizo con 'Ng2SmartTable', solo que a diferencia de este, 
no se lo agrega en 'imports' de 'ngModule' del Modulo */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Parcial - 1!';
  source_test: LocalDataSource;


  showForm = true;  //Muestra formulario; ver en HTML.

  sets = {
    noDataMessage:"Cargando...",
    pager:{perPage:5},
    columns:
    {
      name:
        {title:"Nombre"},    
      alpha2Code:
        {title:"Codigo"},
    }  
  };


//creamos variable de tipo 'DatosService' dentro de los parametros del constructor.
constructor (private datos:DatosService){

   this.source_test = new LocalDataSource();

}




  form={
    nombre:"",
    password:"",
  };  


//Metodos
login(e, form){
  console.log(e);
  console.log(form);
}








log_Edit(e){
  console.log(e);
  e.confirm.resolve(e.newData);
}

ngOnInit()
{
  this.datos.traerDatos()
  .then(data=>{
    this.source_test.load(data)
    console.log(data)
  })
  .catch(error=> console.log(error));
}


}

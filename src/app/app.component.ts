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

  ShowSmartTable = true;
  showFormAlta = true;  
  showFormLogin = true;  


  source_test: LocalDataSource;

  
  form={
    id:"",
    nombre:"",
    password:"",
    email:"",
    perfil:"",
    foto:""
  };  


        //MEJORAR SETTINGS - DESPUES
sets={
  actions:{
    edit: true,
    add: true,
    delete: true,
    cancel: true,
    editConfirm: true,
    deleteConfirm: true,
    confirmeSave: true,
  },
      edit:{
      editButtonContent:"Modificar",
        create:true,
        cancel:true
  },
  noDataMessage:"Sin filas para mostrar",
  pager:{
    perPage:10,
  },
  columns:{
    id:{
      title:"ID",
      editable: false
    },
    nombre:{
      title:"Nombre",
      editable: true,
      editor:{type:"textArea",},
      source: this.form.nombre,
    },
    email:{
      title:"email",
    },
    perfil:{
      title:"perfil",
    },
    foto:{
      title:"foto",
    }
  },
}




constructor (private datos:DatosService){

  this.source_test = new LocalDataSource();
  this.ActualizarGrilla();
}




//Metodos
Login()
{
    this.datos.Logearse(this.form)    
  .then(data=>
  {
    this.source_test.load(data)
    console.log(data)
    console.log(this.source_test + "MIERDA CAJETUDA")
  })
  .catch(error=> console.log(error));
}

//Error 405: POST Metodo no permitido.
//Error 405: GET Metodo no permitido.




Alta(){
    this.datos.darAlta(this.form)    
  .then(data=>{
    this.source_test.load(data)
    console.log(data)})
  .catch(error=> console.log(error));
}

Baja(id){
    this.datos.darBaja(id)    
  .then(data=>
  {
    this.source_test.load(data)
    console.log(data)
  })
  .catch(error=> console.log(error));
}

Modificar(id){
}


Log_SM($e){
    console.log($e);
  }



ActualizarGrilla()
{  
this.datos.traerDatos()
  .then(data=> {
    this.source_test.load(data)
    console.log(data)
  })
  .catch(error=> console.log(error));
}

}

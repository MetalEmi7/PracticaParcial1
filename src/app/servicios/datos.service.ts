import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";  //Para realizar peticiones; Respetar Mayusculas.
import 'rxjs/add/operator/toPromise';           //Nos provee herramientos para manejar datos.

@Injectable()
export class DatosService {


  constructor(private http:Http) {
  }


  //Metodos
traerDatos(){

    let url = 'http://localhost/Laboratorio_lV/Clase1/index.php/table/usuarios';

    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}



darAlta(form) {
    let url = 'http://localhost/Laboratorio_lV/Clase1/index.php/table/usuarios/insert';

    return this.http.post(url, form)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}



Logearse(form){
    let url = 'http://localhost/Laboratorio_lV/Clase1/index.php/table/usuarios/Login';

    return this.http.post(url,form)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}



darBaja(id){
    let url = 'http://localhost/Laboratorio_lV/Clase1/index.php/table/usuarios/delete/';

    return this.http.options(url,Option.arguments)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}





  







  extractData(Res: Response){
    return Res.json() || {};
  }

  error(error: Response){
    return error;
  }
}
 
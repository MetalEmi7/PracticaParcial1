import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";  //Para realizar peticiones; Respetar Mayusculas.
import 'rxjs/add/operator/toPromise';           //Nos provee herramientos para manejar datos.

@Injectable()
export class DatosService {


  constructor(private http:Http) {
  }





Logearse(form){
    console.log(form);

    let url = 'http://localhost/PracticaParcial1/slim/index.php/table/usuarios/Login';
    /* Dejar un '/' al final de la ruta genera error 405
    a menos que en slim o la ruta tenga esta barra para algun fin necesario.
    En tla caso, las rutas deben coincider exactamente */

    return this.http.get(url,form)
      .toPromise()  
      .then(this.extractData)
      .catch(this.error);
}



  //Metodos
traerDatos(){
    let url = 'http://localhost/PracticaParcial1/slim/index.php/table/usuarios';

    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}



darAlta(form) {
    let url = 'http://localhost/PracticaParcial1/slim/index.php/table/usuarios/insert';

    return this.http.post(url, form)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}



darBaja(id){
    let url = 'http://localhost/PracticaParcial1/slim/index.php/table/usuarios/dele' + "te/" + id;

    return this.http.delete(url,id)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}



darModificacion(form){
    let url = 'http://localhost/PracticaParcial1/slim/index.php/table/usuarios/update';

    return this.http.post(url,form)
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
}





  







  extractData(Res: Response){
    console.log(Res);
    return Res.json() || {};
  }

  error(error: Response){
    console.log(error);
    return error;
  }
}
 
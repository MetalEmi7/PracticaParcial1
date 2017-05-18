import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";  //Para realizar peticiones; Respetar Mayusculas.
import 'rxjs/add/operator/toPromise';           //Nos provee herramientos para manejar datos.

@Injectable()
export class DatosService {


  constructor(private http:Http) {
  }


  //Metodos
traerDatos() {
    //Url extaida desde   https://restcountries.eu/#api-endpoints-all
    let url = 'http://localhost/Laboratorio_lV/Clase1/index.php/table/usuarios';

    // let federal = this.http.get("https://restcountries.eu/rest/v2/all")=>console.log();

    //then y catch se ejecuta asinconicamente
    
    return this.http.get(url)
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
 
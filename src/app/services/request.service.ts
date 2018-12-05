import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
    private Single:any[]=[
      {
        nombre:"Juan",
        apellido:"Piña",
        genero:"Tropical",
        img: "../../assets/img/saycojuan-1.jpg"

      },
      {
        nombre:"Pedro",
        apellido:"Infante",
        genero:"Ranchera",
        img: "../../assets/img/descarga.jpg"
      },
      {
        nombre:"Jose",
        apellido:"Rodriguez",
        genero:"Balada",
        img: "../../assets/img/descarga (1).jpg"
      }
    ];
   constructor() {
     console.log("Servicio Request");
    }

    getSingle(){
      return this.Single;
    }
}
export interface Single{
  nombre:string;
  apellido:string;
  genero:string;
}

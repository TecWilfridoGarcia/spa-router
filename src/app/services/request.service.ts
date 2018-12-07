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
        ciudad:"Colombia",
        exito:"ricolino",
        biografia:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        img: "../../assets/img/saycojuan-1.jpg"

      },
      {
        nombre:"Pedro",
        apellido:"Infante",
        genero:"Ranchera",
        ciudad:"Mexico",
        biografia:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        exito:"matame dolor",
        img: "../../assets/img/descarga.jpg"
      },
      {
        nombre:"Jose Luis",
        apellido:"Rodriguez",
        ciudad:"Venezuela",
        genero:"Balada",
        biografia:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        exito:"tú",
        img: "../../assets/img/descarga (1).jpg"
      }
    ];
   constructor() {
     console.log("Servicio Request");
    }

    getSingle(){
      return this.Single;
    }
    getSing(idx:string){
      return this.Single[idx];
    }
}
export interface Single{
  nombre:string;
  apellido:string;
  genero:string;
}

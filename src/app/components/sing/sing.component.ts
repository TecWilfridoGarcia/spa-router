import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
})
export class SingComponent {
  sing:any={};

  constructor(private actiRoutes: ActivatedRoute, private _singServices:RequestService) {
   this.actiRoutes.params.subscribe( params =>{
     //console.log(params['id']);
     this.sing = this._singServices.getSing(params['id'] );
  });

 }
}

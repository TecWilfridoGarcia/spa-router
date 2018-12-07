import { Component, OnInit } from '@angular/core';
import { RequestService, Single} from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  singles:Single[]=[];
  constructor( private _singleService:RequestService, private routes:Router) { }

  ngOnInit() {
    this.singles = this._singleService.getSingle();
    console.log(this.singles);
  }
  viewSing( idx:number){
    // console.log(idx);
    this.routes.navigate(['/sing',idx] )
  }

}

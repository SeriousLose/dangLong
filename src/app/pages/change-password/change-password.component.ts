import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})
export class ChangePasswordComponent implements OnInit {
  changepsw1: any = {
    id:``,
    tel: ``,
    nickname: ``,
    password: ``
  };
  changepsw2: any = {
    id:``,
    tel: ``,
    nickname: ``,
    password:``
  };
  changepsw3: any = {
    id:``,
    tel: ``,
    nickname: ``,
    password:``
  };
  constructor() { }

  ngOnInit() {
  
  }
  
  changepaw(data){
    this.changepsw1=data;
  }

}

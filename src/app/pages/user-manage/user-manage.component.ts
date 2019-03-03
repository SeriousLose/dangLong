import { Component, OnInit } from '@angular/core';
import { TotalServiceService } from '../../services/total-service.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {

  constructor(private totalSer:TotalServiceService,
             private http:HttpClient
             
    ) { }

  ngOnInit() {
    this.getUserNums();
  }
  getUserNums(){
    this.totalSer.getUserumber(`aa=222&b=6666`).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    });
  }
  
  requestData(){
    var _that=this;
    var url=""
    this.http.get(url).subscribe(function(data){
        console.log=JSON.parse(data['tel']);
    
    
      })
  }


}

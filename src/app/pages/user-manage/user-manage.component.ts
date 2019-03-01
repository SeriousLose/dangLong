import { Component, OnInit } from '@angular/core';
import { TotalServiceService } from '../../services/total-service.service';
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {

  constructor(private totalSer:TotalServiceService) { }

  ngOnInit() {
    this.getUserNums();
  }
  getUserNums(){
    this.totalSer.getUserumber().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    });
  }

}

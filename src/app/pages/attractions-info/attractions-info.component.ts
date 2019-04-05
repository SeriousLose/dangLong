import { Component, OnInit } from '@angular/core';
import { TotalServiceService } from '../../services/total-service.service';

@Component({
  selector: 'app-attractions-info',
  templateUrl: './attractions-info.component.html',
  styleUrls: ['./attractions-info.component.less']
})
export class AttractionsInfoComponent implements OnInit {
  display:boolean = false // 修改弹窗显、隐
  constructor(
    private totalSer:TotalServiceService
  ) {
   
   }

  ngOnInit() { 

  }
  look(){
    this.display = true
  }
  around(){
    this.display = true
  }
}

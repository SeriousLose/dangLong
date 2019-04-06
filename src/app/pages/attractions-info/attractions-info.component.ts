import { Component, OnInit } from '@angular/core';
import { TotalServiceService } from '../../services/total-service.service';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-attractions-info',
  templateUrl: './attractions-info.component.html',
  styleUrls: ['./attractions-info.component.less']
})
export class AttractionsInfoComponent implements OnInit {
  display:boolean = false // 修改弹窗显、隐
  
  // public edit:any=''
  // public list=[];

  constructor(
    private totalSer:TotalServiceService,
    private router: Router
  ) {
   
   }

  ngOnInit() { 

  }
  look(){
    this.router.navigate(['/public/attrEvalu']);
  }
  around(){
    this.display = true
  }

  // addedit(){
  //   // alert(this.edit);   //双向数据绑定
  //   this.list.push(this.edit)
  // }
}

import { Component, OnInit } from '@angular/core';
import { TotalServiceService } from "../../services/total-service.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-info-modify',
  templateUrl: './info-modify.component.html',
  styleUrls: ['./info-modify.component.less']
})
export class InfoModifyComponent implements OnInit {
  changeinf1: any = {
    id:``,
    name: ``,
    email:``,
    tel: ``,
    Introduction: ``
  };
  constructor(
    private totalSer: TotalServiceService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
  }

  

  sure() {
    console.log(this.changeinf1);
    
    this.getChangeuserinf(this.changeinf1.id,this.changeinf1.name,this.changeinf1.email,this.changeinf1.tel,this.changeinf1.Introduction)
  }
  changeinf(data){
    this.changeinf1 = data;
  }

  getChangeuserinf(id,name, email, tel,Introduction) {
    let params;
    params = `id=${id}&name=${name}&email=${email}&tel=${tel}&Introduction=${Introduction}`;
    this.totalSer.getChangeroute(params).subscribe(
      res => {
        // this.dataList = res;
        // this.getRoutelist(1);
        // this.getChangeuserinf(id,name, email, tel,Introduction);
        console.log(res, 1111111111111111);
      },
      err => {
        console.log(err);
      }
    );
  }
}

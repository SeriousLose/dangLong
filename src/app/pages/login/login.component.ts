import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

import { HttpClient } from "@angular/common/http";
import { TotalServiceService } from 'src/app/services/total-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  aa='链接四' ;
  tel='';
  password='';
  login1: any = {
    id:``,
    tel: ``,
    password:``
  };
 // 构造函数
  constructor(private router: Router, private totalSer: TotalServiceService,
    private http: HttpClient
    
    ) { 

  }

  // 初始化函数
  ngOnInit(
    
  ) {

  }
  login(data) {
    this.login1 = data;
    // this.getlogin(this.login1.tel,this.login1.password)
  }

  // getlogin(tel,password){
  //   let params;
  //   params = `tel=${tel}&password=${password}`;
  //   this.totalSer.getlogindata(params).subscribe(
  //     res => {
  //       // this.dataList = res;
  //       this.login(1);
  //       console.log(res, 1111111111111111);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  
  

  // 登录 按钮
  toHome(){
    console.log(this.tel);
    console.log(this.password);
    // 登录信息验证
    let params;
      console.log(this.login1);
      console.log(this.totalSer);
      params = `tel=${this.login1.tel}&password=${this.login1.password}`;
      
      this.http.get(`/api/login?${params}`).subscribe(      
          res => {
            if(!res["msg"]){
              alert("账号/密码错误");
              return ;
            }
            if(res["msg"]){
              if(this.login1.tel == `123456`){
                localStorage.setItem(`jurisdiction`,`true`);
              }else{
                localStorage.setItem(`jurisdiction`,`false`);
              }

              this.router.navigate(['/public']);
            }
          },
          err => {
            alert("内部错误，请稍后重试");
            console.log(err);
      })
      // params = `tel=${this.login1.tel}&password=${this.login1.password}`;
      // this.totalSer.getlogining(params).subscribe(
      //       res => {
      //         // this.dataList = res;
      //         // this.login(1);
      //         console.log(res);
      //         debugger
      //         this.router.navigate(['/public']);
      //         console.log(res, 1111111111111111);
      //       },
      //       err => {
      //         console.log(err);
      //       }
      //     );
    
    // 登录接口调用

    // 登录成功跳
   
  }

}

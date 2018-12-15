import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  aa='123456' ;
  tel='';
  password='';
 // 构造函数
  constructor(private router: Router) { 

  }

  // 初始化函数
  ngOnInit(
    
  ) {

  }
  
  // 登录 按钮
  toHome(){
    console.log(this.tel);
    // 登录信息验证

    // 登录接口调用

    // 登录成功跳转
     this.router.navigate(['/public']);
  }

}

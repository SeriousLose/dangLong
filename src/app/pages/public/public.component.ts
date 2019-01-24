import { Component, OnInit } from '@angular/core';
import { TotalServiceService } from '../../services/total-service.service';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.less']
})
export class PublicComponent implements OnInit {
  items:any = [];
  constructor(
    private totalSer:TotalServiceService
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: '首页',
        icon: 'pi pi-pw pi-home',
        routerLink:'/public/home'
      },
      {
        label: '景点',
        icon: 'pi pi-pw pi-images',
        items: [
          {label: '信息查询', icon: 'pi pi-fw pi-star-o',routerLink:'/public/attrInfo'},
          {label: '评价信息', icon: 'pi pi-fw pi-star-o',routerLink:'/public/attrEvalu'},
          {label: '游线信息', icon: 'pi pi-fw pi-star-o',routerLink:'/public/tourRoute'}
        ]
      },
      {
        label: '个人设置',
        icon: 'pi pi-pw pi-cog',
        items: [
          {label: '信息修改', icon: 'pi pi-fw pi-star-o',routerLink:'/public/infoModify'},
          {label: '修改密码', icon: 'pi pi-fw pi-star-o',routerLink:'/public/changePassword'},
        ]
      },
      {
        label: '景点管理',
        icon: 'pi pi-pw pi-images',
        items: [
          {label: '信息管理', icon: 'pi pi-fw pi-star-o',routerLink:'/public/attrManage'},
          {label: '评价管理', icon: 'pi pi-fw pi-star-o',routerLink:'/public/attrEvaluManage'},
          {label: '游线管理', icon: 'pi pi-fw pi-star-o',routerLink:'/public/tourRouteManage'}
        ]
      },
      {
        label: '用户管理',
        icon: 'pi pi-pw pi-user',
        routerLink:'/public/userManage'
      }
    ];
    // 请求用户数量
    // this.getUserNums();
  }
  getUserNums(){
    
    // this.totalSer.getUserumber().subscribe(res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err)
    // });
  }

}

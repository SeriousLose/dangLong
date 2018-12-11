import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PublicComponent } from './pages/public/public.component';
import { HomeComponent } from './pages/home/home.component';
import { AttractionsInfoComponent } from './pages/attractions-info/attractions-info.component';
import { TouristRouteComponent } from './pages/tourist-route/tourist-route.component';
import { AttractionsEvaluationComponent } from './pages/attractions-evaluation/attractions-evaluation.component';
import { HomeManageComponent } from './pages/home-manage/home-manage.component';
import { AttractionsManageComponent } from './pages/attractions-manage/attractions-manage.component';
import { TouristRouteManageComponent } from './pages/tourist-route-manage/tourist-route-manage.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';

const routes: Routes = [
  {
    path: '',                         // 默认加载路由 默认加载路由会找register,下面有register这个。。然后就是登录模块了。所以你以进来就是登录模块，登录模块下面有logincomponent这个文件
    redirectTo: 'register',
    pathMatch: "full"
  },
  {
    path: 'register',                 // 登录/注册模块路由
    component: LoginComponent,
  },{
    path: 'public',                   // 菜单公共 模块
    component: PublicComponent,
    children:[
      {
        path: '',                     // 默认 加载路由
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path: 'home',                 // home（主页) 模块
        component: HomeComponent
      },
      {
        path: `attrInfo`,             // attractions-info(景点信息查询) 模块
        component: AttractionsInfoComponent
      },
      {
        path: `tourRoute`,            // tourist-route(旅游路线) 模块
        component: TouristRouteComponent
      },
      {
        path: `attrEvalu`,            // attractions-evaluation（景点评价） 模块
        component: AttractionsEvaluationComponent
      },
      {
        path: `homeManage`,           // home-manage(首页管理) 模块
        component: HomeManageComponent
      },
      {
        path: `attrManage`,           // attractions-manage(景点管理) 模块
        component: AttractionsManageComponent
      },
      {
        path: `tourRouteManage`,      // tourist-route-manage(旅游路线管理) 模块
        component: TouristRouteManageComponent
      },
      {
        path: `attrEvaluManage`,      // attractions-evaluation-manage(景点评价管理) 模块
        component: TouristRouteManageComponent
      },
      {
        path: `userManage`,           // user-manage(用户管理) 模块
        component: UserManageComponent
      },
    ]
  },
  {
    path: '**',                       // 任意路由
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

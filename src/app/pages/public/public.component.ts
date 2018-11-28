import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.less']
})
export class PublicComponent implements OnInit {
  items:any = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: '首页',
        icon: 'pi pi-pw pi-file',
        routerLink:'/public/home'
      },
      {
        label: '景点',
        icon: 'pi pi-pw pi-file',
        items: [
          {label: '信息查询', icon: 'pi pi-fw pi-external-link',routerLink:'/public/home'},
          {label: '评价信息', icon: 'pi pi-fw pi-times',routerLink:'aa'}
        ]
      },
      {
          label: 'File',
          icon: 'pi pi-pw pi-file',
          items: [
              {label: 'Open', icon: 'pi pi-fw pi-external-link',routerLink:'/public/home'},
              {label: 'Quit', icon: 'pi pi-fw pi-times',routerLink:'aa'}
          ]
      }
  
    ];
  }

}

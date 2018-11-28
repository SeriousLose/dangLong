import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "app";
  items = [];
  ngOnInit() {
    this.items = [
      {
        label: "首页",
        icon: "pi pi-pw",
        items: [
          { label: "Open", icon: "pi pi-fw pi-external-link",url: '/wiki/Lionel_Messi' },
          { separator: true },
          { label: "Quit", icon: "pi pi-fw pi-times",url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
        ]
      },
      {
        label: "首页",
        icon: "pi pi-pw",
        items: [
          { label: "Open", icon: "pi pi-fw pi-external-link" },
          { separator: true },
          { label: "Quit", icon: "pi pi-fw pi-times" }
        ]
      },
      {
        label: "首页",
        icon: "pi pi-pw",
        items: [
          { label: "Open", icon: "pi pi-fw pi-external-link" },
          { separator: true },
          { label: "Quit", icon: "pi pi-fw pi-times" }
        ]
      }
    ];
  }
}

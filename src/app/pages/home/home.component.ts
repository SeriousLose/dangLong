import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {
  images: any[];

  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: "assets/images/home/screen1.jpg",
      alt: "...........................",
      title: "张家界"
    });
    this.images.push({
      source: "assets/images/home/screen1.jpg",
      alt: "Description for Image 2",
      title: "Title 2"
    });
    this.images.push({
      source: "assets/images/home/screen1.jpg",
      alt: "Description for Image 3",
      title: "Title 3"
    });
  }
}

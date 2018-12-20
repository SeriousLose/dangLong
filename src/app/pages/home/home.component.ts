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
      alt: "张家界以其得天独厚的旅游资源闻名于世。以中国第一个国家级森林公园张家界和天子山、索溪峪两个自然保护区组成的武陵源风景区面积达369平方公里，区内以世界罕见的石英砂岩峰林峡谷地貌为主体，集桂林之秀、黄山之奇、华山之险、泰山之雄于一体，藏赂、桥、洞、湖、瀑于一身，有“扩大的盆景、缩小的仙山”之美称。",
      title: "张家界"
    });
    this.images.push({
      source: "assets/images/home/screen2.jpg",
      alt: "云台山上溯夏商，下至明清，文人墨客不绝于此，唐代是称覆釜山，到了金代时，称之为云台山，这个名字一直延续到现代，竹林七贤隐居山中，对中国园林从宫廷走向大自然起到了承前启后的作用。",
      title: "云台山"
    });
    this.images.push({
      source: "assets/images/home/screen3.jpeg",
      alt: "三亚是具有热带海滨风景特色的国际旅游城市   ，又被称为“东方夏威夷”。  2016年6月14日，中国科学院对外发布《中国宜居城市研究报告》，三亚宜居指数在全国40个城市中位居第三。   2016年9月，三亚入选“中国地级市民生发展100强。  2017年2月，三亚入选第三批国家低碳城市试点之一。三亚也是同时入选中国特色魅力城市200强及世界特色魅力城市200强。",
      title: "三亚风景区"
    });
  }
}

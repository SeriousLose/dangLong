import { Component, OnInit } from "@angular/core";
import { TotalServiceService } from "../../services/total-service.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-tourist-route-manage",
  templateUrl: "./tourist-route-manage.component.html",
  styleUrls: ["./tourist-route-manage.component.less"]
})
export class TouristRouteManageComponent implements OnInit {
  dataList: any = [
    {
      id: "1",
      viewname: "张家界",
      price: "123",
      intro: "好"
    },
    {
      id: "1",
      viewname: "云台山",
      price: "123",
      intro: "好"
    },
    {
      id: "1",
      viewname: "连云港",
      price: "123",
      intro: "好"
    },
    {
      id: "1",
      viewname: "厦门",
      price: "123",
      intro: "好"
    },
    {
      id: "1",
      viewname: "雪山",
      price: "123",
      intro: "好"
    }
  ];
  page: page = new page(); // 分页
  constructor(
    private totalSer: TotalServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getRouteNums();
    this.getRoutelist(1);
  }

  //获取总条数
  getRouteNums() {
    this.totalSer.getRouteNum().subscribe(
      res => {
        this.page.totalNum = res[0]["COUNT (*)"];
        console.log(this.page);
      },
      err => {
        console.log(err);
      }
    );
  }
  // 获取数据
  getRoutelist(curPage) {
    this.totalSer.getRoutedata(`page=${curPage}`).subscribe(
      res => {
        this.dataList = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  //删除数据
  delRoute(id) {
    this.totalSer.getDelroute(`id=${id}`).subscribe(
      res => {
        if (res["msg"]) {
          this.getRoutelist(1);
          this.getRouteNums();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  // 分页
  paginate(event) {
    console.log(event);
    this.getRoutelist(event.page + 1);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}
// 分页
export class page {
  pageSize: number = 15; // 条数
  totalNum: number = 1; // 总条数
  curPage: number = 1; // 当前页
  totalPage: number = 1; // 最大页数
}


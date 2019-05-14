import { Component, OnInit } from "@angular/core";
import { TotalServiceService } from "../../services/total-service.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-attractions-manage",
  templateUrl: "./attractions-manage.component.html",
  styleUrls: ["./attractions-manage.component.less"]
})
export class AttractionsManageComponent implements OnInit {
  Keyword:any = ``; // 关键字
  change1: any = {
    id:``,
    viewname: ``,
    price: ``,
    place: ``,
    introduce: ``
  };
  dataList: any = [
    {
      id: "1",
      viewname: "张家界",
      price: "123",
      place: "北京市 ",
      introduce: "好"
    },
    {
      id: "1",
      viewname: "云台山",
      price: "123",
      place: "北京市 ",
      introduce: "好"
    },
    {
      id: "1",
      viewname: "连云港",
      price: "123",
      place: "北京市 ",
      introduce: "好"
    },
    {
      id: "1",
      viewname: "厦门",
      price: "123",
      place: "北京市 ",
      introduce: "好"
    },
    {
      id: "1",
      viewname: "雪山",
      price: "123",
      place: "北京市 ",
      introduce: "好"
    }
  ];
  display: boolean = false; // 修改弹窗显、隐
  page: page = new page(); // 分页
  constructor(
    private totalSer: TotalServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getViewnums();
    this.getViewlist(1);
    // this.getQuerytel('123456');
  }


  change(data) {
    this.change1 = data;
    this.display = true;
  }


  sure() {
    console.log(this.change1);
    this.display = false;
    this.getChangeviewdata(this.change1.viewname,this.change1.price,this.change1.place,this.change1.introduce)
  }
  htt(){
    this.display = false;
  }
  // 获取景点数据;
  getViewlist(curPage) {
    this.totalSer.getViewdata(`page=${curPage}`).subscribe(
      res => {
        this.dataList = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  //删除景点数据
  delView(id) {
    this.totalSer.getDelview(`id=${id}`).subscribe(
      res => {
        if (res["msg"]) {
          this.getViewlist(1);
          this.getViewnums();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  // 获取景点总条数
  getViewnums() {
    this.totalSer.getViewNum().subscribe(
      res => {
        this.page.totalNum = res[0]["COUNT (*)"];
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  // 关键字查询
  getInquire() {
    if (!this.Keyword) {
      alert("请输入查询关键字");
    }
    this.getQueryviewname(this.Keyword);
  }
// 根据景点名称查询
  getQueryviewname(viewname) {
    let params;
    params = `viewname=${viewname}`;
    this.totalSer.getQueryviewname(params).subscribe(
      res => {
        this.dataList = res;
        this.page.totalNum =res["length"]
        console.log(res, 1111111111111111);
      },
      err => {
        console.log(err);
      }
    );
  }

  // 修改用户数据
  getChangeviewdata(viewname, price, place, introduce) {
    let params;
    params = `viewname=${viewname}&price=${price}&place=${place}&introduce=${introduce}`;
    this.totalSer.getChangeviewsdata(params).subscribe(
      res => {
        // this.dataList = res;
        this.getViewlist(1);
        console.log(res, 1111111111111111);
      },
      err => {
        console.log(err);
      }
    );
  }

  // 分页
  paginate(event) {
    console.log(event);
    this.getViewlist(event.page + 1);

    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    // }
  }
}
export class page {
  pageSize: number = 15; // 条数
  totalNum: number = 1; // 总条数
  curPage: number = 1; // 当前页
  totalPage: number = 1; // 最大页数
}

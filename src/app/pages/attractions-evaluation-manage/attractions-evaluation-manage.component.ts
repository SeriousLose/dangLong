
import { Component, OnInit } from "@angular/core";
import { TotalServiceService } from "../../services/total-service.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-attractions-evaluation-manage",
  templateUrl: "./attractions-evaluation-manage.component.html",
  styleUrls: ["./attractions-evaluation-manage.component.less"]
})
export class AttractionsEvaluationManageComponent implements OnInit {
  dataList: any = [
    {
      id: "1",
      viewname: "张家界",
      evaluate: "风景秀丽"
    },
    {
      id: "2",
      viewname: "张家界",
      evaluate: "世外桃源"
    },
    {
      id: "3",
      viewname: "云台山",
      evaluate: "风景迷人"
    },
    {
      id: "4",
      viewname: "云台山",
      evaluate: "优美"
    },
    {
      id: "5",
      viewname: "连云港",
      evaluate: "景色迷人"
    }
  ];

  page: page = new page(); // 分页
  constructor(
    private totalSer: TotalServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getViewEvals();
    this.getViewEvaldata(1);
  }

  //获取总条数
  getViewEvals() {
    this.totalSer.getViewevalnumber().subscribe(
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
  getViewEvaldata(curPage) {
    this.totalSer.getViewevaluate(`page=${curPage}`).subscribe(
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
  delViewevals(id){
    this.totalSer.getDelvieweval(`id=${id}`).subscribe(
      res => {
        
        if(res["msg"]){
          this.getViewEvaldata(1);
          this.getViewEvals();
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
    this.getViewEvaldata(event.page + 1);
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

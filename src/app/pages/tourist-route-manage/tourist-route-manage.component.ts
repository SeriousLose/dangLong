import { Component, OnInit } from "@angular/core";
import { TotalServiceService } from "../../services/total-service.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-tourist-route-manage",
  templateUrl: "./tourist-route-manage.component.html",
  styleUrls: ["./tourist-route-manage.component.less"]
})
export class TouristRouteManageComponent implements OnInit {
  Keyword: any = ``; // 关键字
  
  dataList: any = [
    {
      id: "1",
      viewname: "张家界",
      Hotel: "123",
      specialty: "好"
    },
    {
      id: "1",
      viewname: "云台山",
      Hotel: "123",
      specialty: "好"
    },
    {
      id: "1",
      viewname: "连云港",
      Hotel: "123",
      specialty: "好"
    },
    {
      id: "1",
      viewname: "厦门",
      Hotel: "123",
      specialty: "好"
    },
    {
      id: "1",
      viewname: "雪山",
      price: "123",
      specialty: "好"
    }
  ];

  changeRoute1: any = {
    id:``,
    viewname: ``,
    Hotel:``,
    specialty: ``
  };
  addRoute1: any={
    id:``,
    viewname:``,
    Hotel:``,
    specialty:``
  };
  page: page = new page(); // 分页
  display: boolean = false; // 修改弹窗显、隐
  display1:boolean = false; // 修改用户信息 弹窗

  constructor(
    private totalSer: TotalServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getRouteNums();
    this.getRoutelist(1);
  }

  routeData(data) {
    this.changeRoute1 = data;
    this.display1 = true;
  }

  sure() {
    console.log(this.changeRoute1);
    this.display1 = false;
    this.getChangeroutedata(this.changeRoute1.viewname,this.changeRoute1.Hotel,this.changeRoute1.specialty)
  }
  htt(){
    this.display = false;
  }

  
  addRoute(data) {
    // this.addData1 = data;
    this.addRoute1 = new RouteData();
    this.display = true;
  }

  yes(){
    console.log(this.addRoute1);
    
    this.getAddroutedata(this.addRoute1.viewname,this.addRoute1.Hotel,this.addRoute1.specialty)
  }

  // 关键字查询
  getInquire() {
    if (!this.Keyword) {
      alert("请输入查询关键字");
    }
    this.getQueryviewnames(this.Keyword);
  }
// 根据景点名称查询
  getQueryviewnames(viewname) {
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
//修改周边信息
  getChangeroutedata(Hotel, specialty, viewname) {
    let params;
    params = `Hotel=${Hotel}&specialty=${specialty}&viewname=${viewname}`;
    this.totalSer.getChangeroute(params).subscribe(
      res => {
        // this.dataList = res;
        this.getRoutelist(1);
        console.log(res, 1111111111111111);
      },
      err => {
        console.log(err);
      }
    );
  }

  // 添加周边信息
  
  getAddroutedata(viewname, Hotel,specialty) {
    let params;
    params = `viewname=${viewname}&Hotel=${Hotel}&specialty=${specialty}`;
    this.totalSer.getAddroutedata(params).subscribe(
      res => {
        // this.dataList = res;
        this.getRoutelist(1);
        console.log(res, 1111111111111111);
        this.display = false;
        if(res['msg']){
          alert("添加周边信息成功");
        }else{
          alert("添加失败")
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
class RouteData{
  id:any =``;
  nameview:any =``;
  Hotel:any = ``;
  specialty:any = ``;
  

}


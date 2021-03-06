import { Component, OnInit } from "@angular/core";
import { TotalServiceService } from "../../services/total-service.service";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user-manage",
  templateUrl: "./user-manage.component.html",
  styleUrls: ["./user-manage.component.less"]
})
export class UserManageComponent implements OnInit {
  Keyword: any = ``; // 关键字
  editData1: any = {
    id:``,
    tel: ``,
    nickname:``,
    password: ``
  };
  addData1: any={
    id:``,
    tel:``,
    nickname:``,
    password:``
  };
  dataList: any = [
    {
      id: "1",
      tel: "zhangsan",
      nickname: "gah",
      password: "123456"
    },
    {
      id: "2",
      tel: "zhangsan1",
      nickname: "vahq",
      password: "1234567"
    },
    {
      id: "3",
      tel: "zhangsan2",
      nickname: "dan2",
      password: "1234561"
    },
    {
      id: "4",
      tel: "zhangsan3",
      nickname: "gism",
      password: "1234562"
    },
    {
      id: "5",
      tel: "zhangsan4",
      nickname: "gbnwasq",
      password: "1234563"
    }
  ];
  page: page = new page(); // 分页
  display: boolean = false; // 新增弹窗显、隐
  display1:boolean = false; // 修改用户信息 弹窗 

  constructor(
    private totalSer: TotalServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getUserNums();
    this.getUserlist(1);

    // this.getQuerytel('123456');
  }
  editData(data) {
    this.editData1 = data;
    this.display1 = true;
  }

  sure() {
    console.log(this.editData1);
    this.display1 = false;
    this.getChangeuserdatas(this.editData1.tel,this.editData1.nickname,this.editData1.password)
  }
  htt(){
    this.display = false;
  }

  addData(data) {
    // this.addData1 = data;
    this.addData1 = new UserData();
    this.display = true;
  }

  yes(){
    console.log(this.addData1);

    this.getAddduserdata(this.addData1.tel,this.addData1.nickname,this.addData1.password)
  }

  // 关键字查询
  getInquire() {
    if (!this.Keyword) {
      alert("请输入查询关键字");
    }
    this.getQuerytel(this.Keyword);
  }

  //根据电话查询
  getQuerytel(tel) {
    let params;
    params = `tel=${tel}`;
    this.totalSer.getQuerytel(params).subscribe(
      res => {
        this.dataList = res;
        console.log(res, 1111111111111111);
      },
      err => {
        console.log(err);
      }
    );
  }

  // 修改用户数据
  getChangeuserdatas(tel, nickname, password) {
    let params;
    params = `tel=${tel}&nickname=${nickname}&password=${password}`;
    this.totalSer.getChangeuserdata(params).subscribe(
      res => {
        // this.dataList = res;
        this.getUserlist(1);
        console.log(res, 1111111111111111);
      },
      err => {
        console.log(err);
      }
    );
  }

  // 添加用户数据
  getAddduserdata(tel, nickname, password,) {
    let params;
    params = `tel=${tel}&nickname=${nickname}&password=${password}`;
    this.totalSer.getAdduserdata(params).subscribe(
      res => {
        // this.dataList = res;
        this.getUserlist(1);
        console.log(res, 1111111111111111);
        this.display = false;
        if(res['msg']){
          alert("添加用户成功");
        }else{
          alert("添加失败")
        }

      },
      err => {
        console.log(err);
      }
    );
  }

  // 获取数据
  getUserlist(curPage) {
    this.totalSer.getUser(`page=${curPage}`).subscribe(
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
  delUser(id) {
    this.totalSer.getDeluser(`id=${id}`).subscribe(
      res => {
        if (res["msg"]) {
          this.getUserlist(1);
          this.getUserNums();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  //获取总条数
  getUserNums() {
    this.totalSer.getUserumber().subscribe(
      res => {
        this.page.totalNum = res[0]["COUNT (*)"];
        console.log(this.page);
      },
      err => {
        console.log(err);
      }
    );
  }

  // 分页
  paginate(event) {
    console.log(event);
    this.getUserlist(event.page + 1);
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

class UserData{

    id:any =``;
    tel:any = ``;
    nickname:any = ``;
    password:any = ``;

}
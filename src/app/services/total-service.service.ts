import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpParams, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class TotalServiceService {
  public headers = new HttpHeaders().set(
    "Content-type",
    "application/json; charset=UTF-8"
  );

  constructor(private http: HttpClient) {}

  // 获取用户数量
  getUserumber() {
    return this.http.get(`/api/user`);
  }
  //获取用户数据
  getUser(params) {
    return this.http.get(`/api/userlist?${params}`);
  }
  //删除用户数据
  getDeluser(params) {
    return this.http.get(`/api/deleteuser?${params}`);
  }

  //查询
  getQuerytel(params) {
    return  this.http.get(`/api/querytel?${params}`);
  }
}

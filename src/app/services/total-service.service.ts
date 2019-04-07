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

  //手机号查询
  getQuerytel(params) {
    return this.http.get(`/api/querytel?${params}`);
  }
  // 修改用户数据
  getChangeuserdata(params) {
    return this.http.get(`/api/changeuserdata?${params}`);
  }

  // 增加用户数据
  getAdduserdata(params) {
    return this.http.get(`/api/adduserdata?${params}`);
  }

  //获取景点数量
  getViewNum() {
    return this.http.get(`/api/view`);
  }
  //获取景点数据
  getViewdata(params) {
    return this.http.get(`/api/viewlist?${params}`);
  }

  // 删除景点数据
  getDelview(params) {
    return this.http.get(`/api/deleteview?${params}`);
  }
  //根据景点名称查询
  getQueryviewname(params) {
    return this.http.get(`/api/queryviewname?${params}`);
  }

  // 修改景点信息数据
  getChangeviewsdata(params) {
    return this.http.get(`/api/changeviewdata?${params}`);
  }

  //获取景点评价数量
  getViewevalnumber() {
    return this.http.get(`/api/viewevalnumber`);
  }
  //获取景点数据
  getViewevaluate(params) {
    return this.http.get(`/api/viewevaluate?${params}`);
  }
  // 删除景点数据
  getDelvieweval(params) {
    return this.http.get(`/api/deletevieweval?${params}`);
  }

  //获取周边景点数量
  getRouteNum() {
    return this.http.get(`/api/routenumber`);
  }
  //获取周边景点数据
  getRoutedata(params) {
    return this.http.get(`/api/routelist?${params}`);
  }

  // 删除周边景点数据
  getDelroute(params) {
    return this.http.get(`/api/deleteroute?${params}`);
  }
}

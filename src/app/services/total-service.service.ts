import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TotalServiceService {

  constructor(
    private http: HttpClient
  ) {}

  // 获取用户数量
  getUserumber() {
    return this.http.get("/api/usernum");
  }

}

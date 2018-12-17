import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.less"]
})
export class MessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
  addSingle() {
    this.messageService.add({
      severity: "success",
      summary: "Service Message",
      detail: "Via MessageService"
    });
  }

  addMultiple() {
    this.messageService.addAll([
      {
        severity: "success",
        summary: "Service Message",
        detail: "Via MessageService"
      },
      {
        severity: "info",
        summary: "Info Message",
        detail: "Via MessageService"
      }
    ]);
  }

  clear() {
    this.messageService.clear();
  }
}

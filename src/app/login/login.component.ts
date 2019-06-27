import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @Input() checkParentData;
  @Output() sendEventBack = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  sendEvent(a) {
    this.sendEventBack.emit(a);
  }
}

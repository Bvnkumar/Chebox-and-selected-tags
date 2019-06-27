import { Component} from "@angular/core";
import { sampleData } from "../sample";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  data;
  sampleData1;
  checkedData = [];
  checkData = [
    { name: "Day", available: false },
    { name: "Night", available: false }
  ];
  constructor(private http: HttpClient) {
    this.data = new sampleData("");
    this.sampleData1 = this.http.get("https://reqres.in/api/users?page=2");
  }
  loginForm = new FormGroup({
    name: new FormControl("", Validators.required)
  });
  checked(event, a) {
    if (event.target.checked) {
      this.checkedData.push(a);
    }
  }
  gotEventFromChild(b) {
    this.checkData.forEach((element, index) => {
      if (element.name == b) {
        element.available = false;
      }
    });
    this.checkedData = this.checkedData.filter(function(obj) {
      return obj.name !== b;
    });
  }
}

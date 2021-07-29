import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  message: string = "";
  userError: any;
  constructor(
    public fb: FormBuilder,
    public authservice: AuthService,
    public router: Router
  ) {
    this.myForm = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  onsubmit(form) {
    this.authservice
      .login(form.value.email, form.value.password)
      .then(data => {
        console.log(data);
        this.message = "you have been logged in successfuly";
        this.router.navigate(["/myblog"]);
      })
      .catch(error => {
        console.log(error);
        this.userError = error;
      });
  }
}

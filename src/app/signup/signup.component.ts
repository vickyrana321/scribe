import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

import { AuthService } from "../auth.service";
import * as firebase from "firebase/app";
import "firebase/auth";
import { format } from "url";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  message: string = "";
  userError: any;
  router: any;

  constructor(public fb: FormBuilder, public authservice: AuthService) {
    this.myForm = this.fb.group(
      {
        firstname: ["", [Validators.required]],
        lastname: ["", [Validators.required]],
        email: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
      },
      {
        validator: this.checkpass("password", "confirmPassword")
      }
    );
  }
  checkpass(passwordkey: string, confirmPasswordkey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordkey];
      let confirmPassword = group.controls[confirmPasswordkey];
      if (password.value == confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notequal: true
        });
      }
    };
  }
  // pass() {
  //   if (this.myForm.value.password != this.myForm.value.confirmPassword) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  onsubmit(signupform) {
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;
    let firstname: string = signupform.value.firstname;
    let lastname: string = signupform.value.lastname;
    console.log(this.myForm.value);
    this.authservice
      .signup(email, password, firstname, lastname)
      .then((user: any) => {
        firebase
          .firestore()
          .collection("user")
          .doc(user.uid)
          .set({
            firstname: signupform.value.firstname,
            lastname: signupform.value.lastname,
            email: signupform.value.email,
            photoURL: user.photoURL,
            interests: "",
            bio: "",
            hobbies: ""
          })
          .then(() => {
            this.message = "you have signup successfully,please login";
            this.userError = null;
        this.router.navigate(['/myblogs'])
          });
      })
      .catch(error => {
        console.log(error);
        this.userError = error;
      });
  }
  ngOnInit() {}
}

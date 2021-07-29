import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { ActivatedRoute } from "@angular/router";
import "firebase/auth";
import "firebase/firestore";
@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.css"]
})
export class MenubarComponent implements OnInit {
  user: any;

  loggedIn: boolean = false;
  constructor(public activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);

    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {}
  logout() {
    firebase.auth().signOut();
  }
}

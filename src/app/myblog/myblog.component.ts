import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
@Component({
  selector: "app-myblog",
  templateUrl: "./myblog.component.html",
  styleUrls: ["./myblog.component.css"]
})
export class MyblogComponent implements OnInit {
  user: any = {};
  posts: any[] = [];
  constructor() {
    firebase.firestore().settings({
      timestampsInSnapshots: true
    });
    this.user = firebase.auth().currentUser;
    this.getPost();
  }

  ngOnInit() {}
  getPost() {
    // get the posts from the firebase
    firebase
      .firestore()
      .collection("post")
      .orderBy("created", "desc")
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs);
        this.posts = querySnapshot.docs;
      })
      .catch(err => {
        console.log(err);
      });
  }
  onpostCreated() {
    // refersh the  post list
    this.posts = [];
    this.getPost();
  }
  onDelete() {
    this.posts = [];
    this.getPost();
  }
}

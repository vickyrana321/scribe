import { Component, OnInit, NgZone } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-veiw",
  templateUrl: "./veiw.component.html",
  styleUrls: ["./veiw.component.css"]
})
export class VeiwComponent implements OnInit {
  post: any = {};
  postId: string = "";
  constructor(public activatedroute: ActivatedRoute, public NgZone: NgZone) {
    let postId = this.activatedroute.snapshot.paramMap.get("postId");
    this.postId = postId;
    firebase
      .firestore()
      .collection("post")
      .doc(postId)
      .get()
      .then(docSnapshot => {
        NgZone.run(() => {
          this.post = docSnapshot.data();
          console.log(this.post);
        });
      });
  }

  ngOnInit() {}
}

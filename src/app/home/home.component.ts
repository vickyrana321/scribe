import { Component, OnInit } from "@angular/core";
import { AdderService } from "../adder.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public ad: AdderService) {}

  ammount: number;
  rate: number;
  months: number;
  SI: number;

  adds() {
    this.SI = this.ad.add(this.ammount, this.rate, this.months);
  }
  // date = new Date();
  // husband = "marks";
  // wife = "shala";

  ngOnInit() {}
}

import { Injectable, Input } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AdderService {
  constructor() {}

  add(ammount: number, rate: number, months: number) {
    return (ammount * rate * (months / 12)) / 100;
  }
}

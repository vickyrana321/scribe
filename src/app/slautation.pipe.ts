import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "slautation"
})
export class SlautationPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (args == "male" || args == undefined) return "Mr. " + value;
    else return "Mrs. " + value;
  }
}

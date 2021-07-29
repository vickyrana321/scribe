import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    let firstchar = value.substring(0, 1);
    let allchar = value.substring(1, value.length);
    let results = firstchar.toUpperCase() + allchar.toLowerCase();
    return results;
  }
}

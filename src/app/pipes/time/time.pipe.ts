import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: number): string {
    let hours =  Math.floor(time / 3600);
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    time = time % 3600;
    let minutes = Math.floor(time / 60);
    let minuteString = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minuteString + " " + ampm; 
  }

}

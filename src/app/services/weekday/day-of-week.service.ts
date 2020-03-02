import { Injectable } from '@angular/core';
import { DayOfWeek } from 'src/app/models/meeting';

@Injectable({
  providedIn: 'root'
})
export class DayOfWeekService {

  constructor() { }

  getWeekdayStringList(): string[]{
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  stringToDayOfWeek(dayOfWeekString: string): DayOfWeek {
    return DayOfWeek[dayOfWeekString];
  }

  intToDayOfWeek(dayOfWeekInt: number): DayOfWeek {
    return this.stringToDayOfWeek(this.getWeekdayStringList()[dayOfWeekInt]);
  }
}

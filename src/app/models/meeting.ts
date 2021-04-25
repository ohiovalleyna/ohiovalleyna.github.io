import { Moment } from 'moment';

export class Meeting {
    groupName: string;
    time: Moment;
    dayOfWeek: DayOfWeek;
    tags: Tag[];
    location: string;
    address?: Address;
}

export class Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export class Tag {
    tag: string;
    visible: boolean;
}
export enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

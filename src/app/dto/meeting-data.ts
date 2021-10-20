export interface MeetingData {
    groupName: string;
    time: any;
    dayOfWeek: string;
    tags: string[];
    location: string;
    address: Address;
    wheelchairAccessible: boolean;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

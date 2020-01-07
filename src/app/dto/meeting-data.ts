export interface MeetingData {
    id: string;
    groupName: string;
    time: any;
    dayOfWeek: string;
    tags: string[];
    location: string;
    address: Address;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

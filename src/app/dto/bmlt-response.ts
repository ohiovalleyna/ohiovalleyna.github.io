import { BmltFormat } from './bmlt-format-data';
import { BmltMeetingData } from './bmlt-meeting-data';

export interface BmltResponse {
    meetings: BmltMeetingData[];
    formats: BmltFormat[]
}
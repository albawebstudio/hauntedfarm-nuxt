import type {ScheduleEvent} from "~/models/schedule-event";

export interface Schedule {
    title:   string;
    content: string;
    events:   ScheduleEvent[];
}

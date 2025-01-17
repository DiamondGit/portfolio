import { statusColor } from "./constants";
import { StatusEnum } from "./enums";
import { RangeType } from "./types/commonTypes";

export function coloredConsole(text: string, status: StatusEnum) {
    console.log(`%c${text}`, `color: ${statusColor[status]}`);
}

export function formatDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat("ru");
    return formatter.format(date);
}

export function formatRange({ startDate, endDate }: RangeType): string {
    return `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : "По настоящее время"}`;
}

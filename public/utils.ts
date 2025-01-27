import { IconType } from "react-icons";
import { statusColor } from "./constants";
import { StatusEnum } from "./enums";
import { PathType, RangeType, WorkExpType } from "./types/commonTypes";

export function coloredConsole(text: string, status: StatusEnum) {
    console.log(`%c${text}`, `color: ${statusColor[status]}`);
}

export function formatDateMonthYear(date: Date | null): string {
    if (!date) return "Until now";
    const formatter = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" });
    return formatter.format(date);
}

export function formatDateRange({ startDate, endDate }: RangeType): string {
    return `${formatDateMonthYear(startDate)} - ${formatDateMonthYear(endDate)}`;
}

export function createPathItem(path: string, name: string, RelatedIcon: IconType): PathType {
    return {
        path,
        name,
        RelatedIcon,
    };
}

export function formatDateRangeDiff({ startDate, endDate }: RangeType): string {
    const diffInMs = (endDate || new Date()).getTime() - startDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const result = [];

    if (diffInDays >= 365) {
        const years = Math.floor(diffInDays / 365);
        result.push(`${years} ${years > 1 ? "years" : "year"}`);
    }
    if (diffInDays >= 30) {
        const months = Math.floor((diffInDays % 365) / 30);
        result.push(`${months} ${months > 1 ? "months" : "month"}`);
    } else {
        result.push(`${diffInDays} ${diffInDays > 1 ? "days" : "day"}`);
    }

    return result.join(" ");
}

export function formatDateTotalWorkExpDuration(workExps: WorkExpType[]): string {
    const totalDurationMs = workExps.reduce(
        (total, workExp) => total + ((workExp.endDate || new Date()).getTime() - workExp.startDate.getTime()),
        0
    );
    const diffInDays = Math.floor(totalDurationMs / (1000 * 60 * 60 * 24));

    const result = [];

    if (diffInDays >= 365) {
        const years = Math.floor(diffInDays / 365);
        result.push(`${years} ${years > 1 ? "years" : "year"}`);
    }
    if (diffInDays >= 30) {
        const months = Math.floor((diffInDays % 365) / 30);
        result.push(`${months} ${months > 1 ? "months" : "month"}`);
    } else {
        result.push(`${diffInDays} ${diffInDays > 1 ? "days" : "day"}`);
    }

    return result.join(" ");
}

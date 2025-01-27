import { IconType } from "react-icons";

export type RangeType = {
    startDate: Date;
    endDate: Date | null;
};

export type PathType = {
    path: string;
    name: string;
    RelatedIcon: IconType;
};

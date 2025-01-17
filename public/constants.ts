import { StatusEnum } from "./enums";

export const statusColor: Record<StatusEnum, string> = {
    [StatusEnum.error]: "#cc2e2e",
    [StatusEnum.info]: "#6f6fce",
    [StatusEnum.success]: "#41c341",
    [StatusEnum.warning]: "#f0d32f",
};

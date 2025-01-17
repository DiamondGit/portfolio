import { RangeType } from "@/public/types/commonTypes";
import { Model, Schema, model, models } from "mongoose";

type WorkExpType = {
    companyName: string;
    description: string;
} & RangeType;

const WorkExpSchema = new Schema<WorkExpType>({
    companyName: { type: String, required: true },
    startDate: { type: Date, required: true, unique: true },
    endDate: { type: Date, required: true, unique: true },
    description: { type: String, required: true },
});

const WorkExpModel: Model<WorkExpType> = models.WorkExp || model("WorkExp", WorkExpSchema);

export default WorkExpModel;

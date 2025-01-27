import { WorkExpType } from "@/public/types/commonTypes";
import { Model, Schema, model, models } from "mongoose";

const WorkExpSchema = new Schema<WorkExpType>({
    companyName: { type: String, required: true, default: null },
    startDate: { type: Date, required: true, unique: true, default: null },
    endDate: { type: Date, required: true, unique: true, default: null },
    description: { type: String, required: true, default: null },
});

const WorkExpModel: Model<WorkExpType> = models.WorkExps || model("WorkExps", WorkExpSchema, "WorkExps");

export default WorkExpModel;

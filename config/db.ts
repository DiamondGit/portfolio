import { StatusEnum } from "@/public/enums";
import { coloredConsole } from "@/public/utils";
import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
    if (cachedConnection) {
        coloredConsole(">> Using cached MongoDB connection", StatusEnum.info);
        return cachedConnection;
    }

    try {
        const dbUri = process.env.MONGODB_URI;
        if (!dbUri) throw new Error("No env variable MONGODB_URI of db");
        const cnx = await mongoose.connect(dbUri, { appName: "Portfolio", dbName: "personal" });
        cachedConnection = cnx.connection;
        coloredConsole(">> New MongoDB connection established", StatusEnum.success);
        return cachedConnection;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

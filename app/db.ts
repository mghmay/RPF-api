import mongoose from "npm:mongoose";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

const USER = Deno.env.get("MONGO_USERNAME") ?? "user";
const PASSWORD = Deno.env.get("MONGO_PASSWORD") ?? "password";
const HOST = Deno.env.get("MONGO_HOST") ?? "localhost";
const DB = Deno.env.get("MONGO_INITDB_DATABASE") ?? "api";
const PORT = "27017";
const URI = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`;

export const initDb = async () => {
	await mongoose.connect(URI);
};

import mongoose from "npm:mongoose";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

const USER = Deno.env.get("MONGO_INITDB_USERNAME");
const PASSWORD = Deno.env.get("MONGO_INITDB_PASSWORD");
const HOST = Deno.env.get("MONGO_INITDB_HOST") ?? "localhost";
const DB = Deno.env.get("MONGO_INITDB_DATABASE");
const PORT = Deno.env.get("MONGO_INITDB_PORT");
const URI = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`;
export const initDb = async () => {
	await mongoose.connect(URI);
};

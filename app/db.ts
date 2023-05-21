import mongoose from "npm:mongoose";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

const USER = Deno.env.get("USER_NAME");
const PASSWORD = Deno.env.get("PASSWORD");
const URI = Deno.env.get("URI") ?? "localhost";
const URL = `mongodb://${USER}:${PASSWORD}@${URI}:27017/api`;

export const initDb = async () => {
	await mongoose.connect(URL);
};

import mongoose from "npm:mongoose";

export const initDb = async () => {
	await mongoose.connect("mongodb://user:password@localhost:27017/api");
};

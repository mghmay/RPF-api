import {createHttpError} from "https://deno.land/std@0.188.0/http/http_errors.ts";
import mongoose from "npm:mongoose";
import {User} from "../models/User.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

export default {
	// deno-lint-ignore no-explicit-any
	getUsers: async (ctx: any) => {
		try {
			const users = await User.find().exec();
			ctx.response.body = {
				success: true,
				data: users,
			};
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = {
				success: false,
				data: e.message,
			};
		}
	},
	// deno-lint-ignore no-explicit-any
	getUserById: async (ctx: any) => {
		try {
			const id = ctx.params.id;
			if (!mongoose.Types.ObjectId.isValid(id)) {
				throw createHttpError(400, "Invalid mongoose id");
			}
			const user = await User.findById(id).exec();
			if (user === null) {
				throw createHttpError(404, "User not found");
			}
			ctx.response.body = {
				success: true,
				data: user,
			};
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = {
				success: false,
				data: e.message,
			};
		}
	},
	// deno-lint-ignore no-explicit-any
	createUser: async (ctx: any) => {
		try {
			const requestBody = await ctx.request.body().value;
			if (requestBody === null) {
				throw createHttpError(400, "Request needs a body");
			}

			if (requestBody.password === undefined) {
				throw createHttpError(400, "Request needs a password");
			}
			// generate salt, default saltRounds is 10. Note: this can be increased to make password more secure
			const salt = await bcrypt.genSalt();
			// hash password with salt
			const hashedPassword = await bcrypt.hash(requestBody.password, salt);

			const user = new User({
				username: requestBody.username,
				email: requestBody.email,
				password: hashedPassword,
			});

			if (requestBody.active !== undefined) {
				user.active = requestBody.active;
			}

			await user.save();
			ctx.response.status = 201;
			ctx.response.body = {
				success: true,
				data: user,
			};
		} catch (e) {
			// check if mongoose returns a validation error or a duplicate unique key error
			if (e.name === "ValidationError" || e.code === 11000) {
				ctx.response.status = 422;
				// check for malformed request
			} else if (e.name === "SyntaxError") {
				ctx.response.status = 400;
			} else {
				ctx.response.status = e.status;
			}
			ctx.response.body = {
				success: false,
				data: e.message,
			};
		}
	},
	// deno-lint-ignore no-explicit-any
	deleteUser: async (ctx: any) => {
		try {
			const id = ctx.params.id;
			if (!mongoose.Types.ObjectId.isValid(id)) {
				throw createHttpError(400, "Invalid mongoose id");
			}
			const secretKey = ctx.request.headers.get("secretKey");
			if (secretKey === null || secretKey !== Deno.env.get("SECRET_KEY")) {
				throw createHttpError(
					401,
					"Not authorised, please check your secret key"
				);
			}
			const user = await User.findOneAndDelete({_id: id});
			if (user === null) {
				throw createHttpError(404, "User not found");
			}
			ctx.response.body = {
				success: true,
				data: `User ${id} deleted`,
			};
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = {
				success: false,
				data: e.message,
			};
		}
	},
};

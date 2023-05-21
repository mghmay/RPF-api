import {User} from "../models/User.ts";

export default {
	// deno-lint-ignore no-explicit-any
	getUsers: async (ctx: any) => {
		try {
			const users = await User.find().exec();
			ctx.response.body = users;
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
	// deno-lint-ignore no-explicit-any
	getUserById: async (ctx: any) => {
		try {
			const id = ctx.params.id;
			const user = await User.findById(id).exec();
			if (user === null) {
				console.log("no user!");
				throw Error();
			}
			ctx.response.body = user;
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
	// deno-lint-ignore no-explicit-any
	createUser: async (ctx: any) => {
		try {
			const requestBody = await ctx.request.body().value;
			if (requestBody === null) {
				console.log("request needs a body");
				throw Error();
			}
			const user = new User({
				username: requestBody.username,
				email: requestBody.email,
				password: requestBody.password,
			});
			await user.save();
			ctx.response.status = 201;
			ctx.response.body = user;
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
	// deno-lint-ignore no-explicit-any
	deleteUser: async (ctx: any) => {
		try {
			const id = ctx.params.id;
			const user = await User.findOneAndDelete({_id: id});
			if (user === null) {
				console.log("can't find user!");
			}
			ctx.response.body = `User ${id} deleted`;
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
};

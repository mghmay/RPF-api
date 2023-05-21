export default {
	getUsers: (ctx: {request: any; response: any}) => {
		try {
			ctx.response.body = "getUsers";
			ctx.request.body;
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
	getUserById: (ctx: {response: any}) => {
		try {
			ctx.response.body = "getUserById";
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
	createUser: async (ctx: {response: any}) => {
		try {
			ctx.response.body = "createUser";
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
	deleteUser: (ctx: {response: any}) => {
		try {
			ctx.response.body = "deleteUser";
		} catch (e) {
			ctx.response.status = e.status;
			ctx.response.body = e.message;
		}
	},
};

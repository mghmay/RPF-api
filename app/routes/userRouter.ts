import {Router} from "https://deno.land/x/oak@v12.4.0/router.ts";

export const userRouter = new Router();

userRouter.get("/", (ctx) => {
	console.log("Hello world!");
});

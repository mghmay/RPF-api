import {Router} from "https://deno.land/x/oak@v12.4.0/router.ts";
import userController from "../controllers/userController.ts";

export const userRouter = new Router({prefix: "/user"});

userRouter
	.get("/", userController.getUsers)
	.get("/:id", userController.getUserById)
	.post("/", userController.createUser)
	.delete("/:id", userController.deleteUser);

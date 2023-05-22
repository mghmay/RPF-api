import {userRouter} from "./userRouter.ts";
import {Router} from "https://deno.land/x/oak@v12.4.0/mod.ts";

export const router = new Router();

router.use("/users", userRouter.routes());

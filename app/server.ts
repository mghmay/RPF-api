import {Application} from "https://deno.land/x/oak@v12.4.0/mod.ts";
import {userRouter} from "./routes/userRouter.ts";
import {initDb} from "./db.ts";

initDb();

const app = new Application();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen({port: 3000});

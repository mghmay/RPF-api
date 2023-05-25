import {Application} from "https://deno.land/x/oak@v12.4.0/mod.ts";
import {router} from "./routes/router.ts";
import {initDb} from "./db.ts";

initDb();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const SERVER_PORT = parseInt(Deno.env.get("SERVER_PORT") ?? "3000");
const SERVER_HOST = Deno.env.get("SERVER_HOST") ?? "localhost";

app.addEventListener("listen", () => {
	console.log(`Listening on port ${SERVER_HOST}:${SERVER_PORT}`);
});

await app.listen({port: SERVER_PORT});

import {Application} from "https://deno.land/x/oak@v12.4.0/mod.ts";
import {router} from "./routes/router.ts";
import {initDb} from "./db.ts";

initDb();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;

app.addEventListener("listen", ({secure, port}) => {
	const protocol = secure ? "https://" : "http://";
	const url = `${protocol}${Deno.env.get("HOST") ?? "localhost"}:${port}`;
	console.log(`Listening on: ${url}`);
});

await app.listen({port: port});

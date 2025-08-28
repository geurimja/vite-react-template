import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Heya ni Youkoso" },
{
	headers: "Acces-Control-Allow-Origin": "*"
}));

export default app;

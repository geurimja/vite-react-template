import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => {
	c.header("Access-Control-Allow-Origin", "*")
	return c.json({ name: "Heya ni Youkoso" })
});

export default app;

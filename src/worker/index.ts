import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/:id", (c) => {
	const id = c.req.param("id")
	const data = c.env.POSTS.get(id, { type: "json" })
	if (!data) return c.notFound()
	
	return c.json(data)
});

export default app;

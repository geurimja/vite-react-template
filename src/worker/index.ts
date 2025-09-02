import { Hono } from "hono"

type Env = {
  Bindings: {
    POSTS: KVNamespace
  }
}

const app = new Hono<Env>()

app.get("/api/:id", async (c) => {
  const id = c.req.param("id")
  const data = await c.env.POSTS.get(id, { type: "json" })
  if (!data) return c.notFound()
  
  return c.json(data)
})

export default app
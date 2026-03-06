import { createRoute, OpenAPIHono, type RouteHandler, z } from '@hono/zod-openapi'

export const app = new OpenAPIHono()

const getRoute = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }),
        },
      },
    },
  },
})

const getRouteHandler: RouteHandler<typeof getRoute> = async (c) => {
  return c.json({ message: 'Hono🔥' })
}

export const api = app.basePath('/api').openapi(getRoute, getRouteHandler)

export default app

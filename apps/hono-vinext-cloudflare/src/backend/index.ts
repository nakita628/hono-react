import { createRoute, OpenAPIHono, type RouteHandler, z } from '@hono/zod-openapi'

export const app = new OpenAPIHono().basePath('/api')

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

export const api = app.openapi(getRoute, getRouteHandler)

export default app

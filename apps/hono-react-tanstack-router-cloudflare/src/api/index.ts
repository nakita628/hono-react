import { swaggerUI } from '@hono/swagger-ui'
import { createRoute, OpenAPIHono, type RouteHandler, z } from '@hono/zod-openapi'
import { Scalar } from '@scalar/hono-api-reference'
import { createMarkdownFromOpenApi } from '@scalar/openapi-to-markdown'

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

if (import.meta.env?.DEV ?? process.env.NODE_ENV !== 'production') {
  api.doc('/doc', {
    info: {
      title: 'Hono React Tanstack Router Cloudflare',
      version: '1.0.0',
    },
    openapi: '3.1.0',
  })

  app.get('api/ui', swaggerUI({ url: '/api/doc' }))

  app.get('api/scalar', Scalar({ url: '/api/doc' }))

  const content = app.getOpenAPI31Document({
    openapi: '3.1.0',
    info: {
      title: 'Hono React Tanstack Router Cloudflare',
      version: '1.0.0',
    },
  })

  const markdown = await createMarkdownFromOpenApi(JSON.stringify(content))
  app.get('api/llms.txt', (c) => c.text(markdown))
}

export default app

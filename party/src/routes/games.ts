import { Router } from 'express'

import { prisma } from '../db/prisma'

const routes = Router()

routes.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          parties: true
        }
      }
    }
  })

  return response.status(200).json(games)
})

export { routes }

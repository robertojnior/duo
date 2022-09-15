import { Router } from 'express'

import { prisma } from '../db/prisma'
import { convertHourToMinutes } from '../lib/convertHourToMinutes'

const routes = Router()

routes.post('/:gameId/parties', async (request, response) => {
  const gameId = request.params.gameId

  const { name, discord, weekDays, hourStart, hourEnd, useVoiceChannel } =
    request.body

  const party = await prisma.party.create({
    data: {
      gameId,
      name,
      discord,
      weekDays: weekDays.join(),
      hourStart: convertHourToMinutes(hourStart),
      hourEnd: convertHourToMinutes(hourEnd),
      useVoiceChannel
    }
  })

  return response.status(201).json(party)
})

export { routes }

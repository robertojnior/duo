import { Router } from 'express'

import { routes as games } from './games'
import { routes as parties } from './parties'

const router = Router()

router.use(games)
router.use(parties)

export { router }

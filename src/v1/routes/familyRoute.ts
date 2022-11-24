import { Router } from 'express'
import { getRedirect, getIndex } from '../../controller/familyController'
import { validateToken } from '../../middleware/auth'

const router = Router()
/**
 * http://localhost:5003/api/v1
 */

router
  .get('/', getRedirect)
  .get('/family', validateToken, getIndex)

export { router }

import { Router } from 'express'
import { getRedirect, getIndex } from '../../controller/familyController'

const router = Router()
/**
 * http://localhost:5003/api/v1
 */

router
  .get('/', getRedirect)
  .get('/family', getIndex)

export { router }

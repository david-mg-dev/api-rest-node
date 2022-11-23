import { Request, Response } from 'express'
import * as familyService from '../service/familyService'
import { handleHttp } from '../utils/error.handle'

const getRedirect = (_req: Request, res: Response) => {
  const url = 'http://localhost:5003/api/v1/family'
  res.send(`<a href="${url}">Pulsa aqui</a> para url correcta`)
}
const getIndex = (_req: Request, res: Response) => {
  try {
    res.send(familyService.getFamilia())
  } catch (e) {
    handleHttp(res, 'Error')
  }
}

export { getRedirect, getIndex }

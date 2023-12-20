import type { SanitizedConfig } from 'payload/types'
import { me as meOperation } from 'payload/operations'
import { createPayloadRequest } from '../createPayloadRequest'

export const me = ({ config }: { config: Promise<SanitizedConfig> }) =>
  async function (request: Request, { params }: { params: { collection: string } }) {
    const req = await createPayloadRequest({ request, config })
    const collection = req.payload.collections[params.collection]
    const meRes = await meOperation({
      collection,
      req,
    })

    return Response.json(meRes)
  }
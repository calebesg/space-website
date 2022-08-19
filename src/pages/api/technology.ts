// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import technology from './technology.data.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(technology)
}

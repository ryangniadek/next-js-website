import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { pong } = req.query
  res.statusCode = 200
  res.json({ ping: pong })
}

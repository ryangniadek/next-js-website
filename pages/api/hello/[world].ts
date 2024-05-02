import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { world } = req.query
  res.statusCode = 200
  res.json({ hello: world })
}

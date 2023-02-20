import type { NextApiRequest, NextApiResponse } from 'next'
import products from './../../../storage/products.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST"){
    const body = JSON.parse(req.body);
    products.push(body);
  }
  res.status(200).json(
    products
  );
}
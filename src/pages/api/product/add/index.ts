import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs/promises';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const json = await fs.readFile('./src/storage/products.json');
  let str = "";
  json.toJSON().data.forEach((v) => {
    str += String.fromCodePoint(v);
  });
  //console.log(str);
  const obj = JSON.parse(str);
  obj.data.push(JSON.parse(req.body));
  await fs.writeFile('./src/storage/products.json', JSON.stringify(obj));
  return res.status(200).json({ status: 'ok' });
}
import axios from 'axios';
import type { NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: any) {
  const CRYPTORANKING_BASE_API =
    'https://api.coinranking.com/v2/coin/razxDUgYGNAdQ';

  await axios
    .get(CRYPTORANKING_BASE_API, {
      headers: {
        'x-access-token': process.env.API_KEY,
      },
    })
    .then(({ data }) => {
      console.log('data--', data);
      res.status(200).json({ data: data.data.coin });
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}

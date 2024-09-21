// import { NextApiRequest, NextApiResponse } from 'next';
// import { DuneClient } from "@duneanalytics/client-sdk";

// const DUNE_API_KEY = process.env.DUNE_API_KEY;

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (!DUNE_API_KEY) {
//     return res.status(500).json({ error: "Dune API key is not set" });
//   }

//   const dune = new DuneClient(DUNE_API_KEY);

//   try {
//     const query_result = await dune.getLatestResult({ queryId: 4080796 });
//     res.status(200).json(query_result);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: "Failed to fetch pie chart data from Dune" });
//   }
// }

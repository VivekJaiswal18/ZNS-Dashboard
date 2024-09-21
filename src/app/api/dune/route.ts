// import type { NextApiRequest, NextApiResponse } from 'next'
// import { DuneClient } from "@duneanalytics/client-sdk";

// const DUNE_API_KEY = process.env.DUNE_API_KEY;

// if (!DUNE_API_KEY) {
//   console.error("Dune API key is not set. Please set DUNE_API_KEY in your environment variables.");
// }

// const duneClient = new DuneClient(DUNE_API_KEY);

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const queryResult = await duneClient.getLatestResult({ queryId: 4077549 });
//     if (queryResult && queryResult.result && queryResult.result.rows) {
//       res.status(200).json(queryResult.result.rows);
//     } else {
//       res.status(404).json({ message: 'No data returned from Dune' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching data from Dune' });
//   }
// }


// import { NextApiRequest, NextApiResponse } from 'next';
// import { DuneClient } from "@duneanalytics/client-sdk";

// const DUNE_API_KEY = process.env.DUNE_API_KEY;

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (!DUNE_API_KEY) {
//     return res.status(500).json({ error: "Dune API key is not set" });
//   }

//   const dune = new DuneClient(DUNE_API_KEY);

//   try {
//     // const result = await dune.getLatestResult({ queryId: 4083852 });
//     // const query_result = await dune.getLatestResult({queryId: 4080812});
//     const query_result = await dune.getLatestResult({queryId: 2631587});
//     res.status(200).json(query_result);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: "Failed to fetch data from Dune" });
//   }
// }


// src/app/api/dune/route.ts
import { NextResponse } from "next/server";
import { DuneClient } from "@duneanalytics/client-sdk";

const DUNE_API_KEY = process.env.DUNE_API_KEY;

export async function GET() {
  if (!DUNE_API_KEY) {
    return NextResponse.json({ error: "Dune API key is not set" }, { status: 500 });
  }

  const dune = new DuneClient(DUNE_API_KEY);

  try {
    const query_result = await dune.getLatestResult({ queryId: 4080934 });
    return NextResponse.json(query_result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data from Dune" }, { status: 500 });
  }
}

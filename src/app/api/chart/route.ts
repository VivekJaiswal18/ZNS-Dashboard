// import { NextResponse } from 'next/server';
// import { DuneClient } from '@duneanalytics/client-sdk';

// const DUNE_API_KEY = process.env.DUNE_API_KEY;

// export async function GET() {
//   if (!DUNE_API_KEY) {
//     return NextResponse.json({ error: 'Dune API key is not set' }, { status: 500 });
//   }

//   const dune = new DuneClient(DUNE_API_KEY);

//   try {
//     // Fetch data from Dune using the query ID
//     const query_result = await dune.getLatestResult({ queryId: 4081376 });
//     return NextResponse.json(query_result);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return NextResponse.json({ error: 'Failed to fetch data from Dune' }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { DuneClient } from "@duneanalytics/client-sdk";

const DUNE_API_KEY = process.env.DUNE_API_KEY;

export async function GET() {
  if (!DUNE_API_KEY) {
    return NextResponse.json({ error: "Dune API key is not set" }, { status: 500 });
  }

  const dune = new DuneClient(DUNE_API_KEY);

  try {
    const query_result = await dune.getLatestResult({ queryId: 4081376 }); // Change here
    return NextResponse.json(query_result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data from Dune" }, { status: 500 });
  }
}


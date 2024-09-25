// 'use client'
// import DuneDataTable from "@/components/data";
// import Header from "@/components/Header";
// import Image from "next/image";
// import { DuneClient } from "@duneanalytics/client-sdk";
// import { useState, useEffect } from "react";


// export default async function Home() {
// const dune = new DuneClient("");
// const query_result = await dune.getLatestResult({queryId: 4083852});


//   return (
//     <div className="bg-header h-screen">
//       <Header/>
//       <DuneDataTable/>
//       <div>
//       <h1>{query_result}</h1>

//       </div>
//     </div>
//   );
// }

// 'use client'
// import { useState, useEffect } from "react";
// import DuneDataTable from "@/components/data";
// import Header from "@/components/Header";
// import { Doughnut } from 'react-chartjs-2';
// import DuneBarChart from "@/components/chart";

// export default function Home() {
//   const [queryResult, setQueryResult] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/dune');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const result = await response.json();
//         setQueryResult(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="bg-header h-screen">
//       {/* <Header /> */}
//       {/* <DuneDataTable /> */}
//       <div>
//         <h1>{queryResult ? JSON.stringify(queryResult) : 'Loading...'}</h1>
//       </div>
//       <DuneBarChart data={undefined}/>
//     </div>
//   );
// }


'use client'
import { useState, useEffect } from "react";
// import DuneDataTable from "@/components/data";
import Header from "@/components/Header";
import DuneBarChart from "@/components/chart";
// import { DuneClient } from "@duneanalytics/client-sdk";
import DuneBnbBarChart from "@/components/Bnbdata";
import TaikoDataDisplay from "@/components/TaikoDataDisplay";
// import DunePieChart from "@/components/pieChart"; 
// import { DuneClient } from "@duneanalytics/client-sdk";
// import DuneNewBarChart from "@/components/mintchart";
export default  function Home() {
  const [queryResult, setQueryResult] = useState(null);
  const [bnbqueryResult, bnbsetQueryResult] = useState(null);
  // const [querychartResult, setQuerychartResult] = useState(null);
  // const [pieChartData, setPieChartData] = useState(null);
  // const [querychartResult, setQuerychartResult] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/chart');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const result = await response.json();
  //       setQuerychartResult(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dune');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setQueryResult(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/bnbdata');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        bnbsetQueryResult(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/chart');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const result = await response.json();
  //       setQuerychartResult(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchPieChartData = async () => {
  //     try {
  //       const response = await fetch('/api/pie');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch pie chart data');
  //       }
  //       const result = await response.json();
  //       setPieChartData(result);
  //     } catch (error) {
  //       console.error('Error fetching pie chart data:', error);
  //     }
  //   };
  //   fetchPieChartData();
  // }, []);



  return (
    <div>
      <Header/>
    <div className="bg-header pt-36 ">
      <h1 className="text-3xl m-10">Data Across Chain</h1>
      <div className="max-h-fit max-w-xl">
        {queryResult ? (
          <DuneBarChart data={queryResult} />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <h1 className="text-3xl m-10">BNB Chain Data</h1>

       <div className="max-h-fit max-w-xl mb-16">
        {bnbqueryResult ? (
          <DuneBnbBarChart data={bnbqueryResult} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      
      <TaikoDataDisplay/>
    </div>
<div>
        {/* <h1>{pieChartData ? 'Pie Chart Data Loaded' : 'Loading Pie Chart...'}</h1> */}
        {/* <DunePieChart data={pieChartData} /> */}
        {/* {pieChartData} */}
      </div>
      {/* <DunePieChart/> */}
      {/* <div className="max-w-xl mx-auto">
        {querychartResult ? (
          <DuneBarChart data={querychartResult} />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div> */}
      
      
    </div>
    //  </div>
  );
}


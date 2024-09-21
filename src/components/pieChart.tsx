// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { useEffect, useState } from 'react';
// 'use client'
// import { DuneClient } from "@duneanalytics/client-sdk";

// // Register required chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// // Define the type for the chart data structure
// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     backgroundColor: string[];
//     borderColor: string[];
//     borderWidth: number;
//   }[];
// }

// const DunePieChart = ({ data }) => {
//   const [chartData, setChartData] = useState<ChartData>({
//     labels: [],
//     datasets: []
//   });

//   useEffect(() => {
//     if (data) {
//       const labels = data.result.rows.map((row) => row.chain);
//       const values = data.result.rows.map((row) => row.minters); // Adjust according to your data

//       setChartData({
//         labels: labels,
//         datasets: [
//           {
//             label: 'Minters by Chain',
//             data: values,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.6)',
//               'rgba(54, 162, 235, 0.6)',
//               'rgba(255, 206, 86, 0.6)',
//               'rgba(75, 192, 192, 0.6)',
//               'rgba(153, 102, 255, 0.6)',
//               'rgba(255, 159, 64, 0.6)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       });
//     }
//   }, [data]);

//   return (
//     <div className="chart-container">
//       <Pie
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top',
//             },
//             title: {
//               display: true,
//               text: 'Minters Distribution by Chain',
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default DunePieChart;

// export default async function DunePieChart(){
//     const dune = new DuneClient("jXCBUT422iRA9bJ8G14Cgog5MFLNGEMd");
// const query_result: any = await dune.getLatestResult({queryId: 4080796});
//     return(
//         <div>{query_result}</div>
//     )
// }

// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { useEffect, useState } from 'react';

// // Register required chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Define the type for the dataset
// interface Dataset {
//   label: string;
//   data: number[];
//   backgroundColor: string;
//   borderColor: string;
//   borderWidth: number;
// }

// const DuneNewBarChart = ({ data }) => {
//   const [chartData, setChartData] = useState<{
//     labels: string[];
//     datasets: Dataset[];
//   }>({
//     labels: [],
//     datasets: []
//   });

//   useEffect(() => {
//     if (data) {
//       const chains = data.result.rows.map((row) => row.chain);
//       const minters = data.result.rows.map((row) => row.minters);

//       setChartData({
//         labels: chains,
//         datasets: [
//           {
//             label: 'Average daily mints',
//             data: minters,
//             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//           }
//         ]
//       });
//     }
//   }, [data]);

//   return (
//     <div className="chart-container">
//       <Bar
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top'
//             },
//             title: {
//               display: true,
//               text: 'Average daily mints on each chainmnts'
//             }
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default DuneNewBarChart;


// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { useEffect, useState } from 'react';

// // Register the chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface Dataset {
//   label: string;
//   data: number[];
//   backgroundColor: string;
//   borderColor: string;
//   borderWidth: number;
// }

// const DuneBarChart = ({ data }) => {
//   const [chartData, setChartData] = useState<{
//     labels: string[];
//     datasets: Dataset[];
//   }>({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     if (data) {
//       // Inspect the structure of your fetched data
//       console.log('Chart data:', data);

//       const chains = data.result.rows.map((row) => row.chain); // Modify 'chain' to match your API response
//       const minters = data.result.rows.map((row) => row.wallet); // Modify 'minters' to match your API response

//       setChartData({
//         labels: chains,
//         datasets: [
//           {
//             label: 'Minters by Chain',
//             data: minters,
//             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//         ],
//       });
//     }
//   }, [data]);

//   return (
//     <div>
//       <Bar
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top',
//             },
//             title: {
//               display: true,
//               text: 'Minters by Chain',
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default DuneBarChart;


// src/components/DuneBarChart.tsx
// "use client";

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface DuneBarChartProps {
//   data: any;
// }

// const DuneBarChart: React.FC<DuneBarChartProps> = ({ data }) => {
//   // Parse the data to fit the format of Chart.js
//   const labels = data.result.rows.map((row: any) => row.someLabelColumn); // Replace 'someLabelColumn' with the correct label from your query
//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: 'Your Dataset Label', // Customize this
//         data: data.result.rows.map((row: any) => row.someValueColumn), // Replace 'someValueColumn' with the value column from your query
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Dune Analytics Data',
//       },
//     },
//   };

//   return <Bar data={chartData} options={options} />;
// };

// export default DuneBarChart;

// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { useEffect, useState } from 'react';

// // Register required chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Define the type for the dataset
// interface Dataset {
//   label: string;
//   data: number[];
//   backgroundColor: string;
//   borderColor: string;
//   borderWidth: number;
// }

// const DuneBarChart = ({ data }) => {
//   const [chartData, setChartData] = useState<{
//     labels: string[];
//     datasets: Dataset[];
//   }>({
//     labels: [],
//     datasets: []
//   });

//   useEffect(() => {
//     if (data) {
//       const labels = data.result.rows.map((row) => row.label); // Update this based on actual data structure
//       const values = data.result.rows.map((row) => row.value); // Update this based on actual data structure

//       setChartData({
//         labels: labels,
//         datasets: [
//           {
//             label: 'Data Label', // Update this as needed
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//           }
//         ]
//       });
//     }
//   }, [data]);

//   return (
//     <div className="chart-container">
//       <Bar
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top'
//             },
//             title: {
//               display: true,
//               text: 'Data Visualization Title' // Update as needed
//             }
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default DuneBarChart;


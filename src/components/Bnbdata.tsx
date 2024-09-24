// // components/BarChart.tsx
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { DuneClient } from "@duneanalytics/client-sdk";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const BarChart = () => {
//   const [chartData, setChartData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const dune = new DuneClient("<api_key>"); // Replace with your actual API key
//       const queryResult = await dune.getLatestResult({ queryId: 4095139 });

//       // Assuming `queryResult.result.rows` contains the data in a useful format.
//       const data = queryResult.result.rows;

//       // Example: Extract labels and values from the query result
//       const labels = data.map((row: any) => row.label_field); // Adjust to your data
//       const values = data.map((row: any) => row.value_field); // Adjust to your data

//       setChartData({
//         labels: labels,
//         datasets: [
//           {
//             label: 'Your Dataset Name',
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//         ],
//       });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {chartData ? (
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'top',
//               },
//               title: {
//                 display: true,
//                 text: 'Bar Chart',
//               },
//             },
//           }}
//         />
//       ) : (
//         <p>Loading chart...</p>
//       )}
//     </div>
//   );
// };

// export default BarChart;


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

// // @ts-expect-error: The types for this third-party function are incorrect
// const DuneBnbBarChart = ({ data }) => {
//   const [chartData, setChartData] = useState<{
//     labels: string[];
//     datasets: Dataset[];
//   }>({
//     labels: [],
//     datasets: []
//   });

//   useEffect(() => {
//     if (data) {
//         // @ts-expect-error: The types for this third-party function are incorrect
//       const interval_time = data.result.rows.map((row) => row.interval_time);
//       // @ts-expect-error: The types for this third-party function are incorrect
//       const transactions = data.result.rows.map((row) => row.transactions);

//       setChartData({
//         labels: interval_time,
//         datasets: [
//           {
//             label: 'Minting in last 24 hourson bnb chain',
//             data: transactions,
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
//               text: 'Minting in last 24 hourson bnb chain'
//             }
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default DuneBnbBarChart;


import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

const DuneBnbBarChart = ({ data }: { data: any }) => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: Dataset[];
  }>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data && data.result && data.result.rows) {
      // Safe to access data.result.rows now
      const interval_time = data.result.rows.map((row: any) => row.interval_time);
      const transactions = data.result.rows.map((row: any) => row.transactions);

      setChartData({
        labels: interval_time,
        datasets: [
          {
            label: 'Minting in last 24 hours on BNB chain',
            data: transactions,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  if (!data || !data.result || !data.result.rows) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Minting in last 24 hours on BNB chain',
            },
          },
        }}
      />
    </div>
  );
};

export default DuneBnbBarChart;

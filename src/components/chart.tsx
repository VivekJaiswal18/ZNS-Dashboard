// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { useEffect, useState } from 'react';
// import BarChart from 'react-chartjs-2';

// // Register required chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const DuneBarChart = ({ data }) => {
//   const [chartData, setChartData] = useState({
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
//             label: 'Minters by Chain',
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
//               text: 'Minters by Chain'
//             }
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default DuneBarChart;


import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

// Register required chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the type for the dataset
interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

// @ts-expect-error: The types for this third-party function are incorrect
const DuneBarChart = ({ data }) => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: Dataset[];
  }>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    if (data) {
        // @ts-expect-error: The types for this third-party function are incorrect
      const chains = data.result.rows.map((row) => row.chain);
      // @ts-expect-error: The types for this third-party function are incorrect
      const minters = data.result.rows.map((row) => row.minters);

      setChartData({
        labels: chains,
        datasets: [
          {
            label: 'Minters by Chain',
            data: minters,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      });
    }
  }, [data]);

  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Minters by Chain'
            }
          }
        }}
      />
    </div>
  );
};

export default DuneBarChart;

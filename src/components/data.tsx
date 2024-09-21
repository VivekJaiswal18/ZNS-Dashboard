'use client'

// export function Data(){

//     return(
//         <div className="flex mt-20">
//         This is the Dashboard for ZNS Connect
//         </div>
//     )
// }


// import React, {  useEffect, useState } from 'react';
// import { duneClient } from '../utils/duneClient';
// import fs from 'fs'

// // Define a type for our row data
// type RowData = Record<string, unknown>;

// const DuneDataTable: React.FC = () => {
//   const [data, setData] = useState<RowData[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const queryResult = await duneClient.getLatestResult({ queryId: 4077549 });
//         if (queryResult && queryResult.result && queryResult.result.rows) {
//           setData(queryResult.result.rows as RowData[]);
//         } else {
//           throw new Error('No data returned from Dune');
//         }
//       } catch (err) {
//         console.error("Error fetching data from Dune:", err);
//         setError(err instanceof Error ? err : new Error('An unknown error occurred'));
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // const fetchData = async () => {

//   // const queryResult = await duneClient.getLatestResult({ queryId: 4077549 });
//   // }
//   // fetchData()

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (data.length === 0) return <div>No data available</div>;

//   const columns = Object.keys(data[0]);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column}>{column}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {columns.map((column, columnIndex) => (
//                 <td key={`${rowIndex}-${columnIndex}`}>{String(row[column])}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DuneDataTable;


// components/DuneDataTable.tsx
import React, { useEffect, useState } from 'react';

type RowData = Record<string, unknown>;

const DuneDataTable: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/dune');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data.length === 0) return <div>No data available</div>;

  const columns = Object.keys(data[0]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={`${rowIndex}-${columnIndex}`}>{String(row[column])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DuneDataTable;
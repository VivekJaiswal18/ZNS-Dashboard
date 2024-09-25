// import { useEffect, useState } from "react";
// import fetchTaikoData from "@/components/taiko"; // Adjust the import path as needed

// export default function TaikoDataDisplay() {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetchTaikoData();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching Taiko data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Taiko Chain Data</h1>
//       {data ? (
//         <div>
//           <p>Total Holders: {data.totalHolders}</p>
//           <p>Total Minting: {data.totalMinting}</p>
//           <h2>Top Holders:</h2>
//           <ul>
//             {data.topHolders.map((holder: any, index: number) => (
//               <li key={index}>
//                 Address: {holder.address}, Domains: {holder.domains}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import fetchTaikoData from "@/components/taiko"; // Adjust the import path as needed

export default function TaikoDataDisplay() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTaikoData();
        setData(result);
      } catch (error) {
        console.error("Error fetching Taiko data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl m-10">Taiko Chain Data</h1>
      {data ? (
        <div className="font-sans-serif m-10 text-xl">
          <p>Total Holders: {data.totalHolders}</p> {/* Already a string */}
          <p>Total Minting: {data.totalMinting}</p> {/* Already a string */}
          <h2>Top Holders:</h2>
          <ul>
            {data.topHolders.map((holder: any, index: number) => (
              <li key={index}>
                Address: {holder.address}, Domains: {holder.domains}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

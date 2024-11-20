import { useState } from "react";
const ViewExpense = () => {

    // const tableDataString = localStorage.getItem("data") || "[]";
    // const tableData = JSON.parse(tableDataString);
    const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem("data") || "[]"));
    const [value, setValue] = useState(0); 
    function forceUpdate() {
        return () => setValue(value => value+1);
    }
    const handleDelete = (index) => {
        let prevdata = JSON.parse(localStorage.getItem("data") || "[]");
        prevdata.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(prevdata));
        setTableData(prevdata);
        // window.location.reload();
        // forceUpdate();
      }
    return ( 
        <div>
            <table className="table-auto border-collapse border border-gray-300 w-full max-w-2xl text-left mb-8 ">
    <thead>
      <tr className="bg-gray-700">
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Price</th>
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Date</th>
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Title</th>
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Category</th>
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Action</th>
      </tr>
    </thead>
    <tbody >
      {tableData.length > 0 ? (
        tableData.map((item, index) => (
          <>
          <tr key={index}>
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.price}</td>
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.date}</td>
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.title}</td>
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.category}</td>
            <td className="border border-gray-300 px-6 py-4 text-gray-700 align-content-center">
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200 ease-in-out" 
          onClick={() => handleDelete(index)}>Delete</button></td>
          </tr>
          </>
        ))
      ) : (
        <tr>
          <td
            colSpan="4"
            className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-medium"
          >
            No data available
          </td>
        </tr>
      )}
    </tbody>
  </table>
        </div>
     );
}
 
export default ViewExpense;
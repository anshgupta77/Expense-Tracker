
// new form component
// import React, { useState } from "react";
// import EditExpenseModal from "../Component/EditExpenseModal";

// const ExpenseListPage = () => {
//   const [tableData, setTableData] = useState(
//     JSON.parse(localStorage.getItem("data") || "[]")
//   );
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editFormData, setEditFormData] = useState(null);

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditFormData(tableData[index]);
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...tableData];
//     updatedData.splice(index, 1);
//     if(updatedData.length === 0){
//       localStorage.clear()
//     }
//     else{
//       localStorage.setItem("data", JSON.stringify(updatedData));
//     }
//     setTableData(updatedData);
//   };

//   const handleSave = () => {
//     const updatedData = [...tableData];
//     updatedData[editingIndex] = editFormData;
//     localStorage.setItem("data", JSON.stringify(updatedData));
//     setTableData(updatedData);
//     setEditingIndex(null);
//   };

//   const handleCancel = () => {
//     setEditingIndex(null);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData({ ...editFormData, [name]: value });
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <table className="table-auto border-collapse border border-gray-300 w-full max-w-2xl text-left mb-8">
//         <thead>
//           <tr className="bg-blue-700">
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
//               Title
//             </th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
//               Price
//             </th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
//               Date
//             </th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
//               Category
//             </th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.length > 0 ? (
//             tableData.map((item, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 px-6 py-4 text-gray-700">
//                   {item.title}
//                 </td>
//                 <td className="border border-gray-300 px-6 py-4 text-gray-700">
//                   {item.price}
//                 </td>
//                 <td className="border border-gray-300 px-6 py-4 text-gray-700">
//                   {item.date}
//                 </td>
//                 <td className="border border-gray-300 px-6 py-4 text-gray-700">
//                   {item.category}
//                 </td>
//                 <td className="border border-gray-300 px-6 py-4 text-gray-700 flex gap-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan="5"
//                 className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-medium"
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {editingIndex !== null && (
//         <EditExpenseModal
//           editFormData={editFormData}
//           handleChange={handleChange}
//           handleSave={handleSave}
//           handleCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };

// export default ExpenseListPage;


// now navigate to ExpenseFormPage.jsx.

import React, { useState } from "react";
import EditExpenseModal from "../Component/EditExpenseModal";
import { useNavigate } from "react-router-dom";
const ExpenseListPage = ({setEditIndex}) => {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("data") || "[]")
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState(null);
  const navigate = useNavigate();
  
  const handleEdit = (index) => {
    setEditIndex(index);
    navigate("/add");
  };

  const handleDelete = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    if(updatedData.length === 0){
      localStorage.clear()
    }
    else{
      localStorage.setItem("data", JSON.stringify(updatedData));
    }
    setTableData(updatedData);
  };

  const handleSave = () => {
    const updatedData = [...tableData];
    updatedData[editingIndex] = editFormData;
    localStorage.setItem("data", JSON.stringify(updatedData));
    setTableData(updatedData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <table className="table-auto border-collapse border border-gray-300 w-full max-w-2xl text-left mb-8">
        <thead>
          <tr className="bg-blue-700">
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
              Title
            </th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
              Price
            </th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
              Date
            </th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
              Category
            </th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  {item.price}
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  {item.date}
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  {item.category}
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-medium"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {editingIndex !== null && (
        <EditExpenseModal
          editFormData={editFormData}
          handleChange={handleChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default ExpenseListPage;
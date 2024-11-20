



//snpppet 1
// import { useState } from "react";

// const ExpenseListPage = () => {
//   const [tableData, setTableData] = useState(
//     JSON.parse(localStorage.getItem("data") || "[]")
//   );
//   const [editingIndex, setEditingIndex] = useState(null); // Track which row is being edited
//   const [editFormData, setEditFormData] = useState(null); // Data for the editing form

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditFormData(tableData[index]);
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...tableData];
//     updatedData.splice(index, 1);
//     localStorage.setItem("data", JSON.stringify(updatedData));
//     setTableData(updatedData);
//   };

//   const handleSave = () => {
//     const updatedData = [...tableData];
//     updatedData[editingIndex] = editFormData;
//     localStorage.setItem("data", JSON.stringify(updatedData));
//     setTableData(updatedData);
//     setEditingIndex(null); // Close the edit component
//   };

//   const handleCancel = () => {
//     setEditingIndex(null); // Close the edit component without saving
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
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Title</th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Price</th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Date</th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Category</th>
//             <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.length > 0 ? (
//             tableData.map((item, index) => (
//               <tr key={index}>
//                 {editingIndex === index ? (
//                   <td colSpan="5">
//                     <div className="p-4 bg-gray-200 rounded-md shadow-md">
//                       <div className="flex justify-between">
//                         <h2 className="text-lg font-bold"></h2>
//                         <button
//                           className="text-red-500 text-lg font-extrabold"
//                           onClick={handleCancel}
//                         >
//                           ✕
//                         </button>
//                       </div>
//                       <label className="block mb-2 text-black-300">
//                           Title:
//                           <input
//                             type="text"
//                             name="title"
//                             value={editFormData.title}
//                             onChange={handleChange}
//                             className="block w-full mt-1 border rounded-md p-2"
//                           />
//                         </label>
//                       <div className="mt-4">

//                         <label className="block mb-2 text-black-300">
//                           Price:
//                           <input
//                             type="number"
//                             name="price"
//                             value={editFormData.price}
//                             onChange={handleChange}
//                             className="block w-full mt-1 border rounded-md p-2"
//                           />
//                         </label>
//                         <label className="block mb-2 text-black-300">
//                           Date:
//                           <input
//                             type="date"
//                             name="date"
//                             value={editFormData.date}
//                             onChange={handleChange}
//                             className="block w-full mt-1 border rounded-md p-2"
//                           />
//                         </label>
//                         <label htmlFor="category" className="w-full mb-2 text-black-300 ">
//                         Category:
//                         </label>
//                         <select
//                             onChange={handleChange}
//                             id="options"
//                             name="category"
//                             value={editFormData.category}
//                             className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                             >
//                             <option value="" disabled selected hidden>
//                                 Choose an option
//                             </option>
//                             <option value="Food">Food</option>
//                             <option value="Movie">Movie</option>
//                             <option value="Shopping">Shopping</option>
//                             <option value="Personal">Personal</option>

//                         </select>
//                       </div>
//                       <div className="mt-4 flex justify-end gap-2">
//                         <button
//                           onClick={handleSave}
//                           className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={handleCancel}
//                           className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </td>
//                 ) : (
//                   <>
//                     <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.title}</td>
//                     <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.price}</td>
//                     <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.date}</td>
//                     <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.category}</td>
//                     <td className="border border-gray-300 px-6 py-4 text-gray-700 flex gap-2">
//                       <button
//                         onClick={() => handleEdit(index)}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(index)}
//                         className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </>
//                 )}
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
//     </div>
//   );
// };

// export default ExpenseListPage;


import React, { useState } from "react";
import EditExpenseModal from "../Component/EditExpenseModal";

const ExpenseListPage = () => {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("data") || "[]")
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditFormData(tableData[index]);
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


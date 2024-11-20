import React from "react";

const EditExpenseModal = ({
  editFormData,
  handleChange,
  handleSave,
  handleCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 rounded-lg p-6 shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-red-500 font-bold text-lg"
          onClick={handleCancel}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Expense</h2>
        <label className="block mb-2 text-gray-700">
          Title:
          <input
            type="text"
            name="title"
            value={editFormData.title}
            onChange={handleChange}
            className="block w-full mt-1 border rounded-md p-2"
          />
        </label>
        <label className="block mb-2 text-gray-700">
          Price:
          <input
            type="number"
            name="price"
            value={editFormData.price}
            onChange={handleChange}
            className="block w-full mt-1 border rounded-md p-2"
          />
        </label>
        <label className="block mb-2 text-gray-700">
          Date:
          <input
            type="date"
            name="date"
            value={editFormData.date}
            onChange={handleChange}
            className="block w-full mt-1 border rounded-md p-2"
          />
        </label>
        <label className="block mb-2 text-gray-700">
          Category:
          <select
            name="category"
            value={editFormData.category}
            onChange={handleChange}
            className="block w-full mt-1 border rounded-md p-2"
          >
            <option value="" disabled hidden>
              Choose an option
            </option>
            <option value="Food">Food</option>
            <option value="Movie">Movie</option>
            <option value="Shopping">Shopping</option>
            <option value="Personal">Personal</option>
          </select>
        </label>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseModal;

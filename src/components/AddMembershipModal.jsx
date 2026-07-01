import { useState } from "react";

function AddMembershipModal({ onClose, addPlan }) {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    price: "",
    status: "Active",
  });

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlan = {
      id: Date.now(),
      ...formData,
    };

    addPlan(newPlan);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-2">
          Add Membership Plan
        </h2>

        <p className="text-gray-500 mb-6">
          Fill membership details below.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Plan Name */}

          <div className="mb-4">

            <label className="block mb-2 font-medium">
              Plan Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter Plan Name"
              className="border rounded-lg p-2 w-full"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          {/* Duration */}

          <div className="mb-4">

            <label className="block mb-2 font-medium">
              Duration
            </label>

            <select
              name="duration"
              className="border rounded-lg p-2 w-full"
              value={formData.duration}
              onChange={handleChange}
            >
              <option value="">Select Duration</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="12 Months">12 Months</option>
            </select>

          </div>

          {/* Price */}

          <div className="mb-4">

            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              min="0"
              name="price"
              placeholder="Enter Price"
              className="border rounded-lg p-2 w-full"
              value={formData.price}
              onChange={handleChange}
            />

          </div>

          {/* Status */}

          <div className="mb-6">

            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              className="border rounded-lg p-2 w-full"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save Plan
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddMembershipModal;
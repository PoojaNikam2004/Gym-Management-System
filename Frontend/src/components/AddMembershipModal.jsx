import { useState } from "react";

function AddMembershipModal({ onClose, addPlan }) {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    price: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-6">
          Add Membership Plan
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Plan Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Plan Name"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Duration
            </label>

            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            >
              <option value="">Select Duration</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="12 Months">12 Months</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

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
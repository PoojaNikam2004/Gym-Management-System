import { useState, useEffect } from "react";

function AddTrainerModal({
  onClose,
  addTrainer,
  editingTrainer,
  updateTrainer,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    membership: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingTrainer) {
      setFormData({
        name: editingTrainer.name || "",
        email: editingTrainer.email || "",
        phone: editingTrainer.phone || "",
        specialization: editingTrainer.specialization || "",
        experience: editingTrainer.experience || "",
        membership: editingTrainer.membership || "",
        status: editingTrainer.status || "Active",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        experience: "",
        membership: "",
        status: "Active",
      });
    }
  }, [editingTrainer]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trainerData = {
      id: editingTrainer ? editingTrainer.id : Date.now(),
      ...formData,
    };

    if (editingTrainer) {
      updateTrainer(trainerData);
    } else {
      addTrainer(trainerData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-2">
          {editingTrainer ? "Edit Trainer" : "Add New Trainer"}
        </h2>

        <p className="text-gray-500 mb-6">
          Fill trainer details below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Trainer Name"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Specialization
            </label>

            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Yoga / Cardio / Strength"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="5 Years"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Membership
            </label>

            <select
              name="membership"
              value={formData.membership}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            >
              <option value="">Select Membership</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
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

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              {editingTrainer ? "Update Trainer" : "Save Trainer"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddTrainerModal;
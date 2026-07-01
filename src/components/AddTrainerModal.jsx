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
    status:""
  });

  useEffect(() => {
    if (editingTrainer) {
      setFormData({
        name: editingTrainer.name || "",
        email: editingTrainer.email || "",
        phone: editingTrainer.phone || "",
        specialization: editingTrainer.specialization || "",
        experience: editingTrainer.experience || "",
        status: editingTrainer.status || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        experience: "",
        status: "",
      });
    }
  }, [editingTrainer]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trainerData = {
      id: editingTrainer ? editingTrainer.id : Date.now(),
      ...formData,
      trainer: "Pooja",
      plan: formData.membership,
      status: "Active",
    };

    if (editingTrainer) {
      updateTrainer(trainerData);
    } else {
      addTrainer(trainerData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-2">
          {editingTrainer ? "Edit Trainer" : "Add New Trainer"}
        </h2>

        <p className="text-gray-500 mb-6">
          Fill all required trainer details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="font-medium">Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Phone</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Specialization</label>

            <input
              type="text"
              name="specialization"
              placeholder="Enter Specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Experience</label>

            <input
              type="text"
              name="experience"
              placeholder="Enter Experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Membership</label>

            <select
              name="membership"
              value={formData.membership}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            >
              <option value="">Select Membership</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
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
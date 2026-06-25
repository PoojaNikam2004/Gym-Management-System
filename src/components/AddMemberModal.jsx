import { useState, useEffect } from "react";

function AddMemberModal({
  onClose,
  addMember,
  editingMember,
  updateMember,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    membership: "",
  });

  useEffect(() => {
    if (editingMember) {
      setFormData({
        name: editingMember.name || "",
        email: editingMember.email || "",
        mobile: editingMember.mobile || "",
        age: editingMember.age || "",
        gender: editingMember.gender || "",
        membership: editingMember.membership || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        mobile: "",
        age: "",
        gender: "",
        membership: "",
      });
    }
  }, [editingMember]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberData = {
      id: editingMember ? editingMember.id : Date.now(),
      ...formData,
      trainer: "Pooja",
      plan: formData.membership,
      status: "Active",
    };

    if (editingMember) {
      updateMember(memberData);
    } else {
      addMember(memberData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-2">
          {editingMember ? "Edit Member" : "Add New Member"}
        </h2>

        <p className="text-gray-500 mb-6">
          Fill all required member details.
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
            <label className="font-medium">Mobile</label>

            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Age</label>

            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
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
              {editingMember ? "Update Member" : "Save Member"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddMemberModal;
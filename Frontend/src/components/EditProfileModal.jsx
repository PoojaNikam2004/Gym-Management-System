import { useState, useEffect } from "react";

function EditProfileModal({
  profile,
  updateProfile,
  onClose,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    role: "",
    profileImage: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        profileImage: imageUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile(formData);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white  max-w-xl rounded-xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-2">
          Edit Profile
        </h2>

        <p className="text-gray-500 mb-6">
          Update your profile details.
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
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Role
            </label>

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              readOnly
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
          </div>

          {formData.profileImage && (
            <div className="flex justify-center">
              <img
                src={formData.profileImage}
                alt="Preview"
                className="w-10 h-10 rounded-full object-cover border"
              />
            </div>
          )}

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
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditProfileModal;
function ProfileCard({
  profile,
  onEdit,
  onChangePassword,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">

      <div className="flex flex-col items-center">

        {/* Profile Image */}

        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-5xl font-bold text-gray-600">
            {profile.name.charAt(0)}
          </div>
        )}

        <h2 className="text-3xl font-bold mt-4">
          {profile.name}
        </h2>

        <p className="text-gray-500">
          {profile.role}
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div>
          <label className="text-gray-500 font-medium">
            Email
          </label>

          <p className="mt-1 text-lg">
            {profile.email}
          </p>
        </div>

        <div>
          <label className="text-gray-500 font-medium">
            Phone
          </label>

          <p className="mt-1 text-lg">
            {profile.phone}
          </p>
        </div>

        <div>
          <label className="text-gray-500 font-medium">
            Gender
          </label>

          <p className="mt-1 text-lg">
            {profile.gender}
          </p>
        </div>

        <div>
          <label className="text-gray-500 font-medium">
            Role
          </label>

          <p className="mt-1 text-lg">
            {profile.role}
          </p>
        </div>

      </div>

      <div className="flex justify-end gap-4 mt-10">

        <button
          onClick={onEdit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Edit Profile
        </button>

        <button
          onClick={onChangePassword}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Change Password
        </button>

      </div>

    </div>
  );
}

export default ProfileCard;
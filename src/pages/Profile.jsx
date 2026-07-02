import { useState } from "react";

import SideBar from "../components/SideBar";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import EditProfileModal from "../components/EditProfileModal";
import ChangePasswordModal from "../components/ChangePasswordModal";

function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [profile, setProfile] = useState({
    id: 1,
    name: "Pooja Nikam",
    email: "pooja@gmail.com",
    phone: "9876543210",
    gender: "Female",
    role: "Admin",
    profileImage: "pooja.p.jpeg",
  });

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="flex">

      <SideBar />

      <div className="flex-1 bg-gray-100 p-6">

        <Header />

        <ProfileCard
          profile={profile}
          onEdit={() => setShowEditModal(true)}
          onChangePassword={() => setShowPasswordModal(true)}
        />

        {showEditModal && (
          <EditProfileModal
            profile={profile}
            updateProfile={updateProfile}
            onClose={() => setShowEditModal(false)}
          />
        )}

        {showPasswordModal && (
          <ChangePasswordModal
            onClose={() => setShowPasswordModal(false)}
          />
        )}

      </div>

    </div>
  );
}

export default Profile;
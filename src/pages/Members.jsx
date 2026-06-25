import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MemberTable from "../components/MemberTable";
import AddMemberModal from "../components/AddMemberModal";

function Members() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Pooja Nikam",
      email: "pooja@gmail.com",
      mobile: "9876543210",
      age: 21,
      gender: "Female",
      membership: "Premium",
      trainer: "Pooja",
      plan: "Yearly",
      status: "Active",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [editingMember, setEditingMember] = useState(null);

  // Add Member
  const addMember = (newMember) => {
    setMembers((prev) => [...prev, newMember]);
  };

  // Delete Member
  const deleteMember = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  // Open Edit Modal
  const editMember = (member) => {
    setEditingMember(member);
    setShowModal(true);
  };

  // Update Member
  const updateMember = (updatedMember) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );

    setEditingMember(null);
    setShowModal(false);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-8">
        <Header />

        <SearchBar
          onAddMember={() => {
            setEditingMember(null);
            setShowModal(true);
          }}
        />

        <MemberTable
          members={members}
          deleteMember={deleteMember}
          editMember={editMember}
        />

        {showModal && (
          <AddMemberModal
            onClose={() => {
              setShowModal(false);
              setEditingMember(null);
            }}
            addMember={addMember}
            editingMember={editingMember}
            updateMember={updateMember}
          />
        )}
      </div>
    </div>
  );
}

export default Members;
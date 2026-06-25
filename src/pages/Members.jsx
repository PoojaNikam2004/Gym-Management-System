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
            trainer: "pooja",
            plan:"yearly"
        },
    ]);
    const [showModal, setShowModal] = useState(false);


    const addMember = (newMember) => {
        setMembers((prevMembers) => [...prevMembers, newMember]);
    };

    const deleteMember = (id) => {
    setMembers((prevMembers) =>
        prevMembers.filter((member) => member.id !== id)
    );
};
const editMember =(id)=> {
    setMembers((prevMembers) =>
    prevMembers.map((member) =>
        member.id === id ? { ...member, name: "Updated Name" } : member
    )
);
}



    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 p-8">

                <Header />

                <SearchBar onAddMember={() => setShowModal(true)} />
                <MemberTable members={members} deleteMember={deleteMember} editMember={editMember} />

                {showModal && (
                    <AddMemberModal
                        onClose={() => setShowModal(false)}
                        addMember={addMember}
                    />
                )}

              

            </div>

        </div>
    );
}

export default Members;

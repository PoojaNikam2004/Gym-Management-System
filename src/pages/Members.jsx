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
  },
]);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 p-8">

                <Header />

                <SearchBar onAddMember={() => setShowModal(true)} />
                    <MemberTable  members={members} onChange={setMembers}/>

              {showModal && (
               <AddMemberModal onClose={() => setShowModal(false)} addMember={Members}/>
)}

            </div>

        </div>
    );
}

export default Members;

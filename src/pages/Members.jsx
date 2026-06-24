import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MemberTable from "../components/MemberTable";
import AddMemberModal from "../components/AddMemberModal";

function Members() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 p-8">

                <Header />

                <SearchBar onAddMember={() => setShowModal(true)} />
                    <MemberTable />

              {showModal && (
                   <AddMemberModal onClose={() => setShowModal(false)} />
)}

            </div>

        </div>
    );
}

export default Members;

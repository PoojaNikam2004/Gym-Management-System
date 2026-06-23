import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MemberTable from "../components/MemberTable";

function Members() {
    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 p-8">

                <Header />

                <SearchBar />

                <MemberTable />

            </div>

        </div>
    );
}

export default Members;
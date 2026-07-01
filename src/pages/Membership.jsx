import SideBar from "../components/SideBar";
import Header from "../components/Header";
import MembershipSearchBar from "../components/MembershipSearchBar";
import MembershipTable from "../components/MembershipTable";
import AddMembershipModal from "../components/AddMembershipModal";

import { useState } from "react";

function Membership() {

  const [searchTerm, setSearchTerm] = useState("");
  const [ showModal, setShowModal] = useState(false);

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Basic",
      duration: "1 Month",
      price: 999,
      status: "Active",
    },
    {
      id: 2,
      name: "Premium",
      duration: "6 Months",
      price: 4999,
      status: "Active",
    },
    {
      id: 3,
      name: "VIP",
      duration: "12 Months",
      price: 8999,
      status: "Inactive",
    },
  ]);



  return (
    <div className="flex">

      <SideBar />

      <div className="flex-1 bg-gray-100 p-4">

        <Header />
        <h2 className="text-xl font-bold mb-4">Membership Details</h2>
        <p>This is the membership page content.</p>

        <div >
          <MembershipSearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onAddPlan={() => setShowModal(true)}
          />

          <MembershipTable
            plans={plans}
            setPlans={setPlans}
          />

          {showModal && (
            <AddMembershipModal
              onClose={() => setShowModal(false)}
              addPlan={() => { }}
            />
          )}
        </div>

        {/* <div> */}
        {/* <AddMembershipModal/> */}
        {/* </div> */}

      </div >
    </div>
  )
}
export default Membership;
import { useState } from "react";

import SideBar from "../components/SideBar";
import Header from "../components/Header";
import MembershipSearchBar from "../components/MembershipSearchBar";
import MembershipTable from "../components/MembershipTable";
import AddMembershipModal from "../components/AddMembershipModal";

function Membership() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);

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

  // Add New Plan
  const addPlan = (newPlan) => {
    setPlans((prevPlans) => [...prevPlans, newPlan]);
  }; 

  const deletePlan =(planId)=>{
    setPlans((prevPlans) => prevPlans.filter( (plan) => plan.id !==planId))
  };

  const editPlan =(plan)=>{
    setEditingPlan(plan);
    setShowModal(true);
  }

  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 bg-gray-100 p-6">
        <Header />

        <MembershipSearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddPlan={() => setShowModal(true)}
        />

        <MembershipTable
         plans={plans}
         deletePlan={deletePlan} 
         editPlan={editPlan}/>

        {showModal && (
          <AddMembershipModal
            onClose={() => setShowModal(false)}
            addPlan={addPlan}
            editingPlan={editingPlan}
          />
        )}
      </div>
    </div>
  );
}

export default Membership;
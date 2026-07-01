import { useState } from "react";
import SideBar from "../components/SideBar";
import TrainerSearchBar from "../components/TrainerSearchBar";
import TrainerTable from "../components/TrainerTable";
import AddTrainerModal from "../components/AddTrainerModal";

function Trainers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [trainerFilter, setTrainerFilter] = useState("All");

  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "Pooja Nikam",
      email: "pooja@gmail.com",
      phone: "9876543210",
      specialization: "Yoga",
      experience: "5 Years",
      membership: "Premium",
      status: "Active",
    },
  ]);

  // Add Trainer
  const addTrainer = (newTrainer) => {
    setTrainers((prev) => [...prev, newTrainer]);
  };

  // Delete Trainer
  const deleteTrainer = (id) => {
    setTrainers((prev) =>
      prev.filter((trainer) => trainer.id !== id)
    );
  };

  // Open Edit Modal
  const editTrainer = (trainer) => {
    setEditingTrainer(trainer);
    setShowModal(true);
  };

  // Update Trainer
  const updateTrainer = (updatedTrainer) => {
    setTrainers((prev) =>
      prev.map((trainer) =>
        trainer.id === updatedTrainer.id
          ? updatedTrainer
          : trainer
      )
    );
  };

  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 bg-gray-100 p-6">

        <TrainerSearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          trainerFilter={trainerFilter}
          setTrainerFilter={setTrainerFilter}
          onAddTrainer={() => {
            setEditingTrainer(null);
            setShowModal(true);
          }}
        />

        <TrainerTable
          trainers={trainers}
          deleteTrainer={deleteTrainer}
          editTrainer={editTrainer}
          searchTerm={searchTerm}
          trainerFilter={trainerFilter}
        />

        {showModal && (
          <AddTrainerModal
            onClose={() => {
              setShowModal(false);
              setEditingTrainer(null);
            }}
            addTrainer={addTrainer}
            editingTrainer={editingTrainer}
            updateTrainer={updateTrainer}
          />
        )}

      </div>
    </div>
  );
}

export default Trainers;
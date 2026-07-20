function TrainerSearchBar({
  searchTerm,
  setSearchTerm,
  trainerFilter,
  setTrainerFilter,
  onAddTrainer,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-6">
        Trainers Management
      </h2>

      <div className="flex justify-between items-center gap-4 flex-wrap">

        <input
          type="text"
          placeholder="Search Trainer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-80"
        />

        <select
          value={trainerFilter}
          onChange={(e) => setTrainerFilter(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          onClick={onAddTrainer}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Add Trainer
        </button>

      </div>
    </div>
  );
}

export default TrainerSearchBar;
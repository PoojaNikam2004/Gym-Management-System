function TrainerSearchBar({
  searchTerm,
  setSearchTerm,
  onAddPlan,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">

      <h2 className="text-2xl font-bold mb-6">
        trainer Plans
      </h2>

      <div className="flex justify-between items-center">

        <input
          type="text"
          placeholder="Search Plan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-80"
        />

        <button
          onClick={onAddPlan}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Add Plan
        </button>

      </div>

    </div>
  );
}

export default TrainerSearchBar;
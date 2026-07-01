function TrainerTable({ trainers, deleteTrainer, editTrainer ,searchTerm ,trainerFilter}) {

  
const filteredTrainers = trainers.filter((trainer) => {
  const matchesSearch =
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesTrainer =
    trainerFilter === "All" ||
    trainer.status === trainerFilter;

  return matchesSearch && matchesTrainer;
});


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Specialization</th>
            <th className="p-4 text-left">Experience</th>
            <th className="p-4 text-left">Status</th>
        
          </tr>
        </thead>

        <tbody>
          {filteredTrainers.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="text-center py-6 text-gray-500"
              >
                No Trainers Found
              </td>
            </tr>
          ) : (
            filteredTrainers.map((trainer) => (
              <tr
                key={trainer.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{trainer.name}</td>

                <td className="p-4">{trainer.email}</td>

                <td className="p-4">{trainer.phone}</td>

                <td className="p-4">{trainer.specialization}</td>

                <td className="p-4">{trainer.experience}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      trainer.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {trainer.status}
                  </span>
                </td>

                <td className="p-4 text-center space-x-2">
                  <button
                    onClick={() => editTrainer(trainer)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTrainer(trainer.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TrainerTable;
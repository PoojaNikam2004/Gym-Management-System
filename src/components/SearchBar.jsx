function SearchBar() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">
        Members Management
      </h1>

      <div className="flex justify-between items-center mb-6 px-4 py-2">
        <input
          type="text"
          placeholder="Search Member..."
          className="border p-2 rounded-lg w-80"
        />

        <button className="bg-blue-500 text-white px-4 py-2 margin rounded-lg">
          + Add Member
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
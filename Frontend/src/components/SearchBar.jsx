function SearchBar({ onAddMember, searchTerm, setSearchTerm, membershipFilter, setMembershipFilter }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">
        Members Management
      </h1>

      <div className="flex justify-between items-center mb-6 px-4 py-2">
        <input
          type="text"
          placeholder="Search Member..."
          className="border p-2 rounded-lg w-80" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={membershipFilter}
          onChange={(e) => setMembershipFilter(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="All">All Memberships</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="VIP">VIP</option>
        </select>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onAddMember}>
          + Add Member
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
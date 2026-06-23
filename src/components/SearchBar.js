function SearchBar(){
    return(
      

      <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">
        Members Management
      </h1>

      <div className="flex justify-between mb-6">

        <input
          type="text"
          placeholder="Search Member..."
          className="border p-2 rounded-lg w-80"
        />
        </div>
        </div>
       
    )
}
export default SearchBar;
import { useState } from "react";





function AddMemberModal({ onClose ,addMember }) {

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobileNumber] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [membership, setMembership] = useState("");

    
  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
        id: Date.now(),
        name,
        email,
        mobile,
        age,
        gender,
        membership,
        trainer: "pooja",
        plan: "yearly",
        status: "Active",
    };

    addMember(newMember);
    onClose();
};
    


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">

                <h1 className="text-xl font-bold mb-4">Add New Member</h1>
                <p className="text-gray-500 mb-6">
                    Fill member information below.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">

                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input className="border p-2 rounded-lg w-full mb-4" type="text" id="name" name="name" placeholder="Enter name"
                            value={name} onChange={(e) => setName(e.target.value)} />

                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter email" className="border p-2 rounded-lg w-full mb-4"
                            value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter mobile number" className="border p-2 rounded-lg w-full mb-4"
                            value={mobile} onChange={(e) => setMobileNumber(e.target.value)} />

                        <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
                        <input type="number" id="age" name="age" placeholder="Enter age" className="border p-2 rounded-lg w-full mb-4"
                            value={age} onChange={(e) => setAge(e.target.value)} />

                        <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>

                        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="border p-2 rounded-lg w-full mb-4">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>


                        <label className="block text-gray-700 mb-2" htmlFor="membership">Membership</label>
                        <select id="membership" name="membership" className="border p-2 rounded-lg w-full mb-4" value={membership} onChange={(e) => setMembership(e.target.value)}>
                            <option value="">Select Membership</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                            <option value="vip">VIP</option>
                        </select>
                        <div className="flex justify-end gap-3 mt-6">
                            <button type="submit"  
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">Save</button>
                                
                            <button type="button" onClick={onClose}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 transition ml-2">Cancel</button>

                        </div>
                    </div>
                </form>

            </div>

        </div>

    )
}
export default AddMemberModal;
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobileNumber] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [membership, setMembership] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [ShowPassword, setShowPassword] = useState("");


    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 bg-gray-100">
            <form className="bg-gray-200 p-5 rounded shadow-md px-10 w-full max-w-md">
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-2xl font-bold text-gray-800">Register Form</h1>
                    <input type="text" placeholder="Username" className="border border-gray-300 rounded-md p-2" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="tel" placeholder="Mobile Number" className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500" value={mobile} onChange={(e) => setMobileNumber(e.target.value)} />


                    <p className="text-center mt-4">Already have an account?
                        <Link to="/login"
                            className="text-blue-500 hover:underline">Login</Link></p>

                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <input type="number" placeholder="Age" className="border border-gray-300 rounded-md p-2 outline-none" value={age} onChange={(e) => setAge(e.target.value)} />

                    <select value={membership} onChange={(e) => setMembership(e.target.value)} className="border border-gray-300 rounded-md p-2 ">
                        <option value="">Select Membership</option>
                        <option value="basic">Monthly</option>
                        <option value="premium">Quarterly</option>
                        <option value="vip">Yearly</option>
                    </select>

                    <input type={ShowPassword ? "text" : "password"} placeholder="Password" className="border border-gray-300 rounded-md p-2 " value={password} onChange={(e) => setPassword(e.target.value)} />

                    <input type={ShowPassword ? "text" : "password"} placeholder="Confirm Password" className="border border-gray-300 rounded-md p-2 " value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button type="button" onClick={(e) => setShowPassword(!ShowPassword)} className="bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        {ShowPassword ? "Hide" : "Show"} password
                    </button>

                    <button type="submit" className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Register
                    </button>

                </div>
            </form>
        </div>

    )
}
export default Register;
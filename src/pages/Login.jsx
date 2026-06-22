
import {useState} from "react";
import {Link} from "react-router-dom";




function Login() {
    const [Showpassword,setShowpassword] = useState(false);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-10 bg-gray-100">

            <form className="bg-white p-5 rounded shadow-md">
                <div className="flex flex-col gap-4">


                    <h1 className="text-2xl font-bold text-gray-800">Login Form</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />  
                    <input type={Showpassword ? "text" : "password"} placeholder="Password" className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="button" onClick={() => setShowpassword(!Showpassword)} className="bg-blue-300 text-white px-2 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        {Showpassword ? "Hide" : "Show"} Password
                    </button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Login
                    </button>
                    <p>
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
export default Login;
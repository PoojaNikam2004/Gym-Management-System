import { Link } from "react-router-dom";

function Footer() {
    return (

        <footer className="bg-gray-700 text-white">

            <div className="max-w-7xl mx-auto px-8 py-14">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Gym Info */}

                    <div>

                        <h2 className="text-2xl font-bold mb-4">
                            💪 FitZone Gym
                        </h2>

                        <p className="text-gray-400">
                            Transform your body, build your confidence and
                            achieve your fitness goals with expert trainers
                            and modern equipment.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">

                            <Link to="/" className="hover:text-blue-400">
                                Home
                            </Link>

                            <Link to="/membership" className="hover:text-blue-400">
                                Membership
                            </Link>

                            <Link to="/trainers" className="hover:text-blue-400">
                                Trainers
                            </Link>

                            <Link to="/login" className="hover:text-blue-400">
                                Login
                            </Link>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-400">

                            <p>📍 Pune, Maharashtra</p>

                            <p>📞 +91 9876543210</p>

                            <p>✉ fitzonegym@gmail.com</p>

                        </div>

                    </div>

                    {/* Follow Us */}

                    <div>

                        <h3 className="text-xl font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4 text-3xl">

                            <a href="#">📘</a>

                            <a href="#">📷</a>

                            <a href="#">🐦</a>

                            <a href="#">▶</a>

                        </div>

                    </div>

                </div>

                <hr className="my-8 border-gray-700" />

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">

                    <p>
                        © 2026 FitZone Gym. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">

                        <Link to="/privacy" className="hover:text-white">
                            Privacy Policy
                        </Link>

                        <Link to="/terms" className="hover:text-white">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>

    );
}

export default Footer;
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="bg-linear-to-r from-blue-100 to-indigo-100 min-h-[90vh] flex items-center">

            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Side */}
                <div className="md:w-1/2">

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Transform Your <span className="text-blue-600">Body</span> <br />
                        Transform Your Life 💪
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        Join the best gym management platform with expert trainers,
                        flexible memberships, attendance tracking and modern fitness
                        programs.
                    </p>

                    <div className="mt-8 flex gap-4">

                        <Link
                            to="/register"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Join Now
                        </Link>

                        <Link
                            to="/membership"
                            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                            View Plans
                        </Link>

                    </div>

                </div>

                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center">

                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
                        alt="Gym"
                        className="rounded-2xl shadow-xl w-full max-w-md"
                    />

                </div>

            </div>

        </section>
    );
}

export default HeroSection;
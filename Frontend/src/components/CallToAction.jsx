import { Link } from "react-router-dom";

function CallToAction() {
    return (

        <section className="bg-linear-to-r from-blue-600 to-indigo-700 py-20">

            <div className="max-w-5xl mx-auto text-center px-6">

                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Ready To Transform Your Life?
                </h2>

                <p className="text-blue-100 text-lg mt-6">
                    Join hundreds of members who have already started their
                    fitness journey with us.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                    <Link
                        to="/register"
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
                    >
                        Join Now
                    </Link>

                    <Link
                        to="/membership"
                        className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                        View Membership Plans
                    </Link>

                </div>

            </div>

        </section>

    );
}

export default CallToAction;
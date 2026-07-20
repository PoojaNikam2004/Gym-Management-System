import { Link } from "react-router-dom";

function MembershipPlans() {

    const plans = [

        {
            id: 1,
            name: "Basic",
            price: "₹999",
            duration: "/Month",
            features: [
                "Gym Access",
                "Locker Facility",
                "Free WiFi"
            ],
            color: "border-gray-300"
        },

        {
            id: 2,
            name: "Premium",
            price: "₹2499",
            duration: "/Quarter",
            features: [
                "Gym Access",
                "Personal Trainer",
                "Diet Plan",
                "Locker Facility"
            ],
            color: "border-blue-500"
        },

        {
            id: 3,
            name: "Elite",
            price: "₹7999",
            duration: "/Year",
            features: [
                "Unlimited Access",
                "Personal Trainer",
                "Nutrition Plan",
                "Group Classes",
                "Locker Facility"
            ],
            color: "border-yellow-500"
        }

    ];

    return (

        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center text-gray-800">
                    Membership Plans
                </h2>

                <p className="text-center text-gray-500 mt-4 mb-12">
                    Choose the plan that suits your fitness journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {plans.map((plan) => (

                        <div
                            key={plan.id}
                            className={`border-2 ${plan.color} rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300`}
                        >

                            <h3 className="text-3xl font-bold mb-4">
                                {plan.name}
                            </h3>

                            {plan.name === "Premium" && (
                                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                                    ⭐ Most Popular
                                </span>
                            )}

                            <p className="text-4xl font-bold text-blue-600">
                                {plan.price}
                                <span className="text-lg text-gray-500">
                                    {plan.duration}
                                </span>
                            </p>

                            <ul className="mt-6 space-y-3">

                                {plan.features.map((feature, index) => (

                                    <li
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        ✅ {feature}
                                    </li>

                                ))}

                            </ul>

                            <Link
                                to="/register"
                                className="block mt-8 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Join Now
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default MembershipPlans;
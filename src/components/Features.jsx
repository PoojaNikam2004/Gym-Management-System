function Features() {

    const features = [

        {
            id: 1,
            icon: "🏋️",
            title: "Modern Equipment",
            description: "Train with the latest gym machines and premium fitness equipment."
        },

        {
            id: 2,
            icon: "👨‍🏫",
            title: "Expert Trainers",
            description: "Certified trainers help you achieve your fitness goals faster."
        },

        {
            id: 3,
            icon: "🥗",
            title: "Nutrition Plans",
            description: "Personalized diet plans to improve your health and performance."
        },

        {
            id: 4,
            icon: "⏰",
            title: "Flexible Timings",
            description: "Morning and evening batches available for all members."
        }

    ];

    return (

        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center text-gray-800">
                    Why Choose Our Gym?
                </h2>

                <p className="text-center text-gray-500 mt-4 mb-12">
                    Everything you need to achieve your fitness goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((feature) => (

                        <div
                            key={feature.id}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                        >

                            <div className="text-5xl mb-5">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Features;
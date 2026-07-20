function TrainersSection() {

    const trainers = [

        {
            id: 1,
            name: "Pooja Nikam",
            specialization: "Strength Trainer",
            experience: "5 Years",
            rating: "⭐ 4.9",
            image: "pooja.p.jpeg"
        },

        {
            id: 2,
            name: "Sneha Joshi",
            specialization: "Yoga Trainer",
            experience: "4 Years",
            rating: "⭐ 4.8",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },

        {
            id: 3,
            name: "Amit Sharma",
            specialization: "CrossFit Coach",
            experience: "6 Years",
            rating: "⭐ 5.0",
            image: "https://randomuser.me/api/portraits/men/52.jpg"
        }

    ];

    return (

        <section className="py-20 bg-gray-100">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center">
                    Meet Our Expert Trainers
                </h2>

                <p className="text-center text-gray-500 mt-3 mb-12">
                    Learn from experienced professionals who will guide your fitness journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {trainers.map((trainer) => (

                        <div
                            key={trainer.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >

                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold">
                                    {trainer.name}
                                </h3>

                                <p className="text-blue-600 mt-2">
                                    {trainer.specialization}
                                </p>

                                <p className="text-gray-600 mt-2">
                                    Experience: {trainer.experience}
                                </p>

                                <p className="mt-2 font-semibold">
                                    {trainer.rating}
                                </p>

                                <button
                                    className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                                >
                                    View Profile
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default TrainersSection;
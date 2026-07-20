function Gallery() {

    const images = [

        {
            id: 1,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
            title: "Workout Area"
        },

        {
            id: 2,
            image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
            title: "Modern Equipment"
        },

        {
            id: 3,
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
            title: "Strength Training"
        },

        {
            id: 4,
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600",
            title: "Cardio Zone"
        },

        {
            id: 5,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600",
            title: "Yoga Session"
        },

        {
            id: 6,
            image: "https://images.unsplash.com/photo-1599058917212-d750089bc07f?w=600",
            title: "Fitness Training"
        }

    ];

    return (

        <section className="py-20 bg-gray-100">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center">
                    Gym Gallery
                </h2>

                <p className="text-center text-gray-500 mt-3 mb-12">
                    Explore our modern gym facilities and training environment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {images.map((item) => (

                        <div
                            key={item.id}
                            className="overflow-hidden rounded-2xl shadow-lg group"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="bg-white p-4">

                                <h3 className="text-xl font-semibold text-center">
                                    {item.title}
                                </h3>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Gallery;
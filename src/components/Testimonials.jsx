function Testimonials() {

    const testimonials = [

        {
            id: 1,
            name: "Pooja Nikam",
            review: "This gym completely changed my lifestyle. The trainers are amazing and very supportive.",
            rating: 5,
            membersince: "Member since: 2020",
            image: "pooja.p.jpeg"
        },

        {
            id: 2,
            name: "Rahul Sharma",
            review: "The equipment is modern and the atmosphere is motivating. Highly recommended!",
            rating: 5,
            membersince: "Member since: 2022",
            image: "pooja.p.jpeg"
        },

        {
            id: 3,
            name: "Sneha Patil",
            review: "Affordable membership plans with excellent facilities. I enjoy working out here every day.",
            rating: 4,
            membersince: "Member since: 2021",
            image: "pooja.p.jpeg"
        }

    ];

    return (

        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center">
                    What Our Members Say
                </h2>

                <p className="text-center text-gray-500 mt-3 mb-12">
                    Real reviews from our happy gym members.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((member) => (

                        <div
                            key={member.id}
                            className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
                        >

                            <div className="flex items-center gap-4">

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />

                                <div>

                                    <h3 className="text-xl font-semibold">
                                        {member.name}
                                    </h3>

                                    <p className="text-yellow-500">
                                        {"⭐".repeat(member.rating)}
                                    </p>

                                </div>

                            </div>

                            <p className="mt-6 text-gray-600 italic">
                                "{member.review}"
                            </p>

                            <p className="mt-4 text-gray-400 text-sm">
                                {member.membersince}
                            </p>
                        </div>
            
                        
                    ))}

                </div>

            </div>

        </section>

    );
}

export default Testimonials;
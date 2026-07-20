function RecentPayments() {

    const payments = [
        {
            id: 1,
            name: "Pooja Nikam",
            amount: 2500,
            method: "UPI",
            status: "Paid"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            amount: 1200,
            method: "Cash",
            status: "Paid"
        },
        {
            id: 3,
            name: "Komal Sharma",
            amount: 3500,
            method: "Card",
            status: "Pending"
        },
        {
            id: 4,
            name: "Amit Kumar",
            amount: 6000,
            method: "UPI",
            status: "Paid"
        }
    ];

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">
                💳 Recent Payments
            </h2>

            <div className="space-y-4">

                {payments.map((payment) => (

                    <div
                        key={payment.id}
                        className="flex justify-between items-center border-b pb-3"
                    >

                        <div>

                            <h3 className="font-semibold">
                                {payment.name}
                            </h3>

                            <p className="text-gray-500 text-sm">
                                {payment.method}
                            </p>

                        </div>

                        <div className="text-right">

                            <p className="font-bold">
                                ₹{payment.amount}
                            </p>

                            <span
                                className={
                                    payment.status === "Paid"
                                        ? "text-green-600 font-semibold"
                                        : "text-red-600 font-semibold"
                                }
                            >
                                {payment.status}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default RecentPayments;
function Header() {

    const today = new Date();

    return (

        <div className="flex justify-between items-center mb-8">

            <div>

                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome Back, Admin 👋
                </h1>

                <p className="text-gray-500">
                    {today.toDateString()}
                </p>

            </div>

            <div className="flex items-center gap-4">

                <button className="text-2xl">
                    🔔
                </button>

                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    A
                </div>

            </div>

        </div>

    );
}

export default Header;
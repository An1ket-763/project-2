export default function Navbar({ toggleSidebar, currentPage, username, onLogout }) {
    return (
        <nav className="bg-white shadow-md px-4 py-3">
            <div className="sm:hidden flex flex-col items-center space-y-4">
                <div className="w-full flex justify-between items-center mb-2">
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-xl font-semibold text-gray-800">{currentPage}</span>
                    <div className="w-6"></div>
                </div>

                {username && (
                    <span className="text-gray-700 font-medium mt-2 ml-2">
                        Welcome, {username}!
                    </span>
                )}

                <button
                    onClick={onLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition mt-2"
                >
                    Logout
                </button>
            </div>

            <div className="hidden sm:flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-xl font-semibold text-gray-800">{currentPage}</span>
                </div>
                <div className="flex items-center space-x-4">
                    {username && (
                        <span className="text-gray-700 font-medium ml-2">
                            Welcome, {username}!
                        </span>
                    )}
                    <button
                        onClick={onLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

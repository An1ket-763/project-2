export default function Navbar({ toggleSidebar, currentPage, username, onLogout, darkMode }) {
    return (
        <nav className={`shadow-md px-4 py-3 flex items-center justify-between transition-colors duration-300 ${darkMode
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-800'
            }`}>
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleSidebar}
                    className={`hover:text-gray-400 focus:outline-none ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <span className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                    {currentPage}
                </span>
            </div>
            <div className="flex items-center space-x-4">
                {username && (
                    <span className={`font-medium hidden sm:inline ${darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
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
        </nav>
    );
}

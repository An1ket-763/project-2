import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Dashboard', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Assets', path: '/assets' },
];

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [username, setUsername] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('authUsername');
        setUsername(storedUsername || '');
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authUsername');
        localStorage.removeItem('authEmail');
        localStorage.removeItem('authPassword');
        navigate('/login');
    };

    const currentPage = navItems.find(item => item.path === location.pathname)?.name || '';

    return (
        <div className="flex min-h-screen bg-gray-100 transition-all duration-300">
            <div
                className={`h-screen bg-indigo-600 text-white shadow-md z-20 transition-all duration-300
                ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
            >
                <div className="p-4 border-b border-blue-800 text-lg font-bold">
                    Menu
                </div>
                <ul className="p-4 space-y-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`block px-4 py-2 rounded-md transition
                                    ${location.pathname === item.path
                                        ? 'bg-blue-600 font-semibold'
                                        : 'hover:bg-blue-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col flex-1 transition-all duration-300">
                <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
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
                            <span className="text-gray-700 font-medium hidden sm:inline">
                                Welcome, {username}!
                            </span>
                        )}
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </div>
                </nav>

                <main className="flex-grow p-4 bg-white shadow-inner">
                    {children}
                </main>
            </div>
        </div>
    );
}


import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { IoMoon, IoSunny } from "react-icons/io5";

const navItems = [
    { name: 'Dashboard', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Assets', path: '/assets' },
];

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [darkMode, setDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem('darkMode')) || false;
    });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('authUsername');
        setUsername(storedUsername || '');
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#1a202c';
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = '#ffffff';
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const handleLogout = () => {
        localStorage.removeItem('authUsername');
        localStorage.removeItem('authEmail');
        localStorage.removeItem('authPassword');
        navigate('/login');
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const currentPage = navItems.find(item =>
        location.pathname.startsWith(item.path)
    )?.name || '';

    return (
        <div className={`flex min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
            <Sidebar isOpen={sidebarOpen} darkMode={darkMode} />

            <div className="flex flex-col flex-1 transition-all duration-300">
                <Navbar
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                    currentPage={currentPage}
                    username={username}
                    onLogout={handleLogout}
                    darkMode={darkMode}
                />

                <main className={`flex-grow p-4 ${darkMode ? 'dark:bg-gray-800' : 'bg-white'} shadow-inner`}>
                    {children}

                    <button
                        onClick={toggleDarkMode}
                        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 ${darkMode
                            ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
                    </button>
                </main>
            </div>
        </div>
    );
}

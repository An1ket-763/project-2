import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

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
            <Sidebar isOpen={sidebarOpen} />
            <div className="flex flex-col flex-1 transition-all duration-300">
                <Navbar
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                    currentPage={currentPage}
                    username={username}
                    onLogout={handleLogout}
                />
                <main className="flex-grow p-4 bg-white shadow-inner">
                    {children}
                </main>
            </div>
        </div>
    );
}


import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { name: 'Dashboard', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Assets', path: '/assets' },
];

export default function Sidebar({ isOpen }) {
    const location = useLocation();

    return (
        <div
            className={`h-screen bg-indigo-600 text-white shadow-md z-20 transition-all duration-300
            ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
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
    );
}

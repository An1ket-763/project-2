import { useEffect, useState } from 'react';

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(prev => !prev)}
            className="fixed bottom-4 right-4 z-50 bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full shadow transition"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
}

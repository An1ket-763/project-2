import { IoMoon, IoSunny } from "react-icons/io5";
import { useState, useEffect } from "react";

const AuthCardLayout = ({ title, subtitle, children, footer }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem("darkMode")) || false;
    });

    // Listen for dark mode changes (including from other components)
    useEffect(() => {
        const handleStorageChange = () => {
            setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        localStorage.setItem("darkMode", JSON.stringify(newMode));
        setDarkMode(newMode);
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-cover bg-center"
                }`}
            style={!darkMode ? { backgroundImage: 'url("/bgimg-1.jpg")' } : {}}
        >
            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 ${darkMode
                    ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
            </button>

            {/* Card Content */}
            <div className="w-full max-w-md">
                <div
                    className={`rounded-lg shadow-lg p-8 border transition-colors duration-300 ${darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-200 text-gray-800"
                        }`}
                >
                    <div className="text-center mb-8">
                        <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                            {title}
                        </h2>
                        <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {subtitle}
                        </p>
                    </div>
                    {children}
                    {footer && <div className="mt-4">{footer}</div>}
                </div>
            </div>
        </div>
    );
};

export default AuthCardLayout;

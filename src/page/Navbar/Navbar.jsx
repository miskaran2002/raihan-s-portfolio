import { useState } from "react";
import { Link, NavLink } from "react-router"; 
import {
    FaHome,
    FaUser,
    FaProjectDiagram,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    const navLinks = [
        { name: "Home", icon: <FaHome size={28} />, to: "/" },
        { name: "About", icon: <FaUser size={28} />, to: "/about" },
        { name: "Projects", icon: <FaProjectDiagram size={28} />, to: "/projects" },
        { name: "Contact", icon: <FaEnvelope size={28} />, to: "/contact" },
    ];

    return (
        <>
            {/* Top Header (Mobile & Tablet) */}
            <header className="fixed top-0 left-0 w-full bg-red-800 text-white z-50 flex justify-between items-center px-4 py-3 shadow-lg md:hidden">
                <h1 className="font-bold text-lg tracking-wide">
                    <Link to="/">Portfolio</Link>
                </h1>
                <button
                    className="text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Mobile & Tablet Slide Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 z-40 md:hidden`}
            >
                <div className="flex flex-col items-start p-6 space-y-6 mt-12">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className={({ isActive }) =>
                                `flex items-center space-x-3 text-lg transition ${isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>

            <nav className="hidden md:flex flex-col items-center justify-center fixed right-0 top-1/2 -translate-y-1/2 p-4 rounded-l-lg space-y-4 z-40">
                {navLinks.map((link, index) => {
                    const isHovered = hoveredIndex === index;
                    const isActive = window.location.pathname === link.to;

                    return (
                        <NavLink
                            key={index}
                            to={link.to}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={({ isActive: navIsActive }) =>
                                `relative flex items-center cursor-pointer rounded px-3 py-2 transition-colors
          ${navIsActive || isHovered
                                    ? "bg-cyan-600 bg-opacity-90 text-white"
                                    : "bg-black bg-opacity-30 text-white hover:text-cyan-400"
                                }`
                            }
                            title={link.name}
                        >
                            {link.icon}
                            {(isHovered || isActive) && (
                                <span className="ml-3 whitespace-nowrap rounded px-3 py-1 text-sm select-none pointer-events-none">
                                    {link.name}
                                </span>
                            )}
                        </NavLink>
                    );
                })}
            </nav>



        </>
    );
};

export default Navbar;

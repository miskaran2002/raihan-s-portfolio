import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaCss3Alt, FaJs, FaVuejs } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiNextdotjs, SiPrisma, SiPostgresql, SiTypescript } from "react-icons/si";

// Variants for container stagger
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

// Card slide from left/right when rendered
const slideVariants = {
    hidden: (index) => ({
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Floating up-down motion for images
const floatingVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 4,
                ease: "easeInOut",
            },
        },
    },
};

// Map tech keywords to icons
const techIconMap = {
    react: <FaReact className="text-cyan-400" />,
    "next.js": <SiNextdotjs className="text-white" />,
    typescript: <SiTypescript className="text-blue-500" />,
    firebase: <SiFirebase className="text-yellow-400" />,
    tailwind: <SiTailwindcss className="text-cyan-500" />,
    nodejs: <FaNodeJs className="text-green-600" />,
    mongodb: <SiMongodb className="text-green-500" />,
    express: <SiExpress className="text-gray-400" />,
    mysql: <SiMysql className="text-blue-600" />,
    postgresql: <SiPostgresql className="text-blue-400" />,
    prisma: <SiPrisma className="text-teal-400" />,
    javascript: <FaJs className="text-yellow-300" />,
    css3: <FaCss3Alt className="text-blue-500" />,
    vue: <FaVuejs className="text-green-400" />,
};

// Render tech pills
function renderTechPills(techStackStr) {
    const techs = techStackStr
        .toLowerCase()
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

    return techs.map((tech) => (
        <div
            key={tech}
            className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-full text-sm font-semibold select-none text-gray-300 shadow-sm"
        >
            {techIconMap[tech] || null}
            <span className="capitalize">{tech}</span>
        </div>
    ));
}

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            id: "project1",
            name: "Smart City Complaint Platform",
            screenshot: "https://i.ibb.co.com/8njHsx3c/image.png", 
            techStack: "Next.js, TypeScript, NodeJS, Express, PostgreSQL, Prisma, Tailwind",
            description: "A comprehensive civic issue management platform featuring a complex 5-role Role-Based Access Control (RBAC) system (Citizen, Department Staff, Technician, Department Manager, City Admin). Built with a modular backend architecture, it ensures strict route authorization and data privacy. It handles the complete lifecycle of a complaint from initiation, department-specific routing, technical assignment, to resolution, complete with an active audit trail for all critical actions.",
            liveLink: "https://city-complaint-frontend-mu.vercel.app/",
            githubClient: "https://github.com/miskaran2002/city-complaint-platform-frontend", 
            githubServer: "https://github.com/miskaran2002/city-complaint-platform", 
            challenges: "Implementing the complex 5-role RBAC middleware and ensuring users only access authorized routes was highly challenging. Designing a secure state machine for the complaint lifecycle and handling complex resource assignments with Prisma transactions required deep structural planning. Ensuring data security and audit logging for every status transition added to the backend complexity.",
            improvements: "Future plans include integrating geospatial mapping (GIS) to visualize complaints on a city map. Adding real-time push notifications for status updates and AI-driven automated assignment of complaints to the relevant department based on issue descriptions are also on the roadmap."
        },
        {
            id: "project2",
            name: "RentNest",
            screenshot: "https://i.ibb.co.com/fzrZgwQv/image.png", 
            techStack: "Next.js, TypeScript, NodeJS, Express, PostgreSQL, Prisma, Tailwind",
            description: "RentNest is an advanced, full-stack rental property management platform. The backend is designed using a scalable modular pattern, integrating Prisma ORM with a PostgreSQL database. It features secure JWT authentication (access & refresh tokens), role-based access control, bcrypt hashing, and GCP social login. The system also supports advanced data fetching operations like pagination, filtering, and sorting, backed by comprehensive audit logging.",
            liveLink: "https://rent-nest-fronted.vercel.app/",
            githubClient: "https://github.com/miskaran2002/rent-nest-fronted", 
            githubServer: "https://github.com/miskaran2002/RentNest----Backend-with-prisma", 
            challenges: "Structuring the backend with a scalable modular pattern while integrating Prisma ORM for relational data handling was a major learning curve. Implementing secure JWT authentication with refresh token rotation and GCP social login required strict security measures. Optimizing query performance with advanced indexing and handling complex filtering/pagination logic were significant technical hurdles.",
            improvements: "I plan to integrate a real-time chat system between tenants and property owners. Implementing an advanced booking calendar system, Stripe payment gateway for rent collection, and virtual 3D property tours are the next big features on the horizon."
        },
        {
            id: "project3",
            name: "Stockly",
            screenshot: "https://i.ibb.co.com/B5tKvwRD/Screenshot-2025-09-01-112704.png",
            techStack: "Next.js, Tailwind, NodeJS, MongoDB",
            description: "Stockly is a modern e-commerce platform built with Next.js that ensures blazing fast performance, SEO optimization, and a smooth user experience. The app allows users to browse products, manage carts, and checkout with ease. With TailwindCSS, the UI is sleek, responsive, and highly customizable. Advanced features like dynamic product filtering and secure authentication provide a seamless shopping journey.",
            liveLink: "https://next-stockly-app.vercel.app/",
            githubClient: "https://github.com/miskaran2002/next-stockly-app",
            challenges: "Implementing real-time inventory management and handling product images efficiently with Next.js optimization tools was tricky. Creating a scalable database schema for products, users, and orders, along with SEO optimization for large product catalogs, demanded extra effort.",
            improvements: "Integrating AI-based product recommendations, adding multi-language/multi-currency support, and enhancing the admin dashboard with advanced analytics and automated inventory alerts are planned improvements."
        },
        {
            id: "project4",
            name: "HeartBridge",
            screenshot: "https://i.ibb.co/chgCZVZf/Screenshot-2025-08-11-232029.png",
            techStack: "React, Firebase, Tailwind, NodeJS, MongoDB, Express",
            description: "HeartBridge is a modern, secure, and user-friendly matrimonial platform designed to help individuals find their ideal life partners in Bangladesh. Built as a full-stack MERN application, it focuses on providing a smooth experience, showcasing detailed biodata, and offering premium features for enhanced visibility.",
            liveLink: "https://heart-bridge-f100e.web.app/",
            githubClient: "https://github.com/miskaran2002/HeartBridge-client",
            githubServer: "https://github.com/miskaran2002/HeartBridge-server",
            challenges: "Integrating multiple APIs while ensuring smooth data flow and designing a fully responsive UI across different devices required careful planning. Implementing robust authentication to protect sensitive user data added complexity.",
            improvements: "Implementing real-time notifications, adding strict user roles and permissions for enhanced security, and integrating advanced analytics to better understand user behavior are on the roadmap."
        },
        {
            id: "project5",
            name: "EchoServe",
            screenshot: "https://i.ibb.co/hJ4BgJwj/Screenshot-2025-08-11-233732.png",
            techStack: "React, Firebase, Tailwind, NodeJS, MongoDB, Express",
            description: "EchoServe is a comprehensive service review platform connecting users with reliable service providers. It offers a seamless experience with real-time data synchronization. Users can browse, search, and filter services, while providers can manage profiles and respond to feedback, fostering a trustworthy community.",
            liveLink: "https://echo-serve.web.app/",
            githubClient: "https://github.com/miskaran2002/echo-serve-client",
            githubServer: "https://github.com/miskaran2002/echo-serve-server",
            challenges: "Optimizing page load speed with dynamic content and managing authentication and data security while maintaining a smooth user experience were complex. Integrating Firebase for real-time updates demanded efficient state management.",
            improvements: "Adding multi-language support, offline mode functionality, and real-time notifications for service updates. Strengthening security features with role-based access control is also planned."
        },
        {
            id: "project6",
            name: "RacipeRealm",
            screenshot: "https://i.ibb.co/qYk5hJkp/Screenshot-2025-08-11-234044.png",
            techStack: "React, Firebase, Tailwind, NodeJS, MongoDB",
            description: "RacipeRealm is an interactive platform for culinary enthusiasts to discover, share, and manage recipes. It features a responsive UI, complex data structuring for ingredients and steps, and secure user authentication for personalized experiences.",
            liveLink: "https://recipe-realm-4ea1f.web.app/",
            githubClient: "https://github.com/miskaran2002/recipe-reliem",
            challenges: "Designing a flexible database schema to handle complex recipe data and ensuring smooth communication between frontend and backend APIs were difficult. Optimizing performance to handle multiple simultaneous users without slowing down the app was another challenge.",
            improvements: "Adding advanced search/filtering, integrating AI-based recipe recommendations, and implementing offline capabilities so users can access recipes without internet. Adding social sharing features is also planned."
        }
    ];

    const openModal = (project) => {
        setActiveProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setActiveProject(null);
    };

    return (
        <section id="projects" className="min-h-screen px-4 sm:px-6 md:px-20 py-20 text-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-cyan-400 select-none tracking-wide">Featured Projects</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">A showcase of my recent full-stack applications, highlighting complex architectures, modular backend designs, and responsive user interfaces.</p>
                </div>

                <motion.div
                    className="grid gap-10 grid-cols-1 lg:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative rounded-2xl shadow-xl cursor-pointer overflow-hidden border border-gray-800 bg-gray-900 group"
                            custom={index}
                            variants={slideVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            onClick={() => openModal(project)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="h-64 sm:h-80 w-full overflow-hidden bg-black flex items-center justify-center p-4">
                                {project.screenshot ? (
                                    <motion.img
                                        src={project.screenshot}
                                        alt={`${project.name} Screenshot`}
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500"
                                        variants={floatingVariants}
                                        animate="animate"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-gray-500">
                                        <FaReact className="text-6xl mb-4 opacity-20" />
                                        <p>Screenshot Coming Soon</p>
                                    </div>
                                )}
                            </div>
                            
                            {/* Overlay Info on Hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-cyan-900/40 flex flex-col items-center justify-center gap-4 transition-all duration-300 ${
                                    hoveredIndex === index ? "opacity-100 backdrop-blur-sm" : "opacity-0"
                                }`}
                            >
                                <h3 className="text-white text-3xl sm:text-4xl font-bold select-none text-center px-4 mb-2">{project.name}</h3>
                                <div className="flex flex-wrap justify-center gap-2 px-6 mb-4 max-w-lg">
                                    {renderTechPills(project.techStack).slice(0, 4)}
                                    {project.techStack.split(',').length > 4 && <span className="text-xs text-gray-300 self-center">+ more</span>}
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openModal(project);
                                    }}
                                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 px-6 py-2.5 rounded-lg text-white font-semibold transition shadow-lg hover:shadow-cyan-500/25"
                                >
                                    View Details <FaPlus />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            {modalOpen && activeProject && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4 sm:p-6" onClick={closeModal}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative text-white overflow-y-auto max-h-[90vh] shadow-2xl custom-scrollbar"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full transition-colors z-10"
                            aria-label="Close Modal"
                        >
                            &times;
                        </button>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Col: Image & Links */}
                            <div className="w-full lg:w-5/12 space-y-6">
                                <div className="bg-black/50 rounded-xl p-4 border border-gray-800 h-64 sm:h-72 flex items-center justify-center overflow-hidden">
                                    {activeProject.screenshot ? (
                                        <img
                                            src={activeProject.screenshot}
                                            alt={activeProject.name}
                                            className="w-full h-full object-contain rounded-md"
                                        />
                                    ) : (
                                        <span className="text-gray-500">No Image Available</span>
                                    )}
                                </div>
                                
                                <div className="flex flex-col gap-3">
                                    {activeProject.liveLink && (
                                        <a
                                            href={activeProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 w-full py-3 rounded-lg font-semibold transition shadow-lg"
                                        >
                                            <FaExternalLinkAlt /> View Live Website
                                        </a>
                                    )}
                                    <div className="flex gap-3">
                                        {activeProject.githubClient && (
                                            <a
                                                href={activeProject.githubClient}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 flex-1 py-3 rounded-lg font-semibold transition"
                                            >
                                                <FaGithub /> Client
                                            </a>
                                        )}
                                        {activeProject.githubServer && (
                                            <a
                                                href={activeProject.githubServer}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 flex-1 py-3 rounded-lg font-semibold transition"
                                            >
                                                <FaGithub /> Server
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Col: Details */}
                            <div className="w-full lg:w-7/12">
                                <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">{activeProject.name}</h3>
                                
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {renderTechPills(activeProject.techStack)}
                                    </div>
                                </div>

                                <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Overview</h4>
                                        <p>{activeProject.description}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Challenges Faced</h4>
                                        <p>{activeProject.challenges}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Future Improvements</h4>
                                        <p>{activeProject.improvements}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Projects;
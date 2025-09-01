import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { FaPlus, FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaVuejs } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Helper to map tech keywords to icons
const techIconMap = {
    react: <FaReact className="text-cyan-400" />,
    firebase: <SiFirebase className="text-yellow-400" />,
    tailwind: <SiTailwindcss className="text-cyan-500" />,
    nodejs: <FaNodeJs className="text-green-600" />,
    mongodb: <SiMongodb className="text-green-500" />,
    express: <SiExpress className="text-gray-400" />,
    mysql: <SiMysql className="text-blue-600" />,
    javascript: <FaJs className="text-yellow-300" />,
    css3: <FaCss3Alt className="text-blue-500" />,
    vue: <FaVuejs className="text-green-400" />,
};

function renderTechPills(techStackStr) {
    const techs = techStackStr
        .toLowerCase()
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

    return techs.map((tech) => (
        <div
            key={tech}
            className="flex items-center gap-1 bg-cyan-700 bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold select-none text-white"
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
    const navigate = useNavigate();

    const projects = [
        {
            id: "project1",
            name: "HeartBridge",
            screenshot: "https://i.ibb.co/chgCZVZf/Screenshot-2025-08-11-232029.png",
            techStack: "React, Firebase, Tailwind, NodeJS, MongoDB,css3,vue,express",
            description: "HeartBridge is a full-stack service review platform.HeartBridge is a modern, secure, and user-friendly matrimonial platform designed to help individuals find their ideal life partners in Bangladesh. Built as a full-stack MERN application, HeartBridge focuses on providing a smooth experience for users, showcasing detailed biodata, and offering premium features for enhanced visibility. Whether you're searching for a soulmate or just exploring, HeartBridge helps bridge hearts through trust, clarity, and technology.",
            liveLink: "https://heart-bridge-f100e.web.app/",
            githubClient: "https://github.com/miskaran2002/HeartBridge-client",
            challenges: "API integration and responsive UI were challenging.During the development of HeartBridge, integrating multiple APIs while ensuring smooth and secure data flow was challenging. Designing a fully responsive UI that works seamlessly across different devices required careful planning and testing. Implementing robust authentication and authorization to protect user data added complexity. Additionally, optimizing performance for real-time updates and managing state efficiently demanded advanced techniques.",
            improvements: "Add real-time notifications and user roles.For future improvements, I plan to implement real-time notifications to keep users instantly updated. Adding user roles and permissions will enhance security and provide tailored experiences. I also aim to integrate advanced analytics to better understand user behavior. Improving the UI/UX further and adding multilingual support are on the roadmap to make the platform more accessible globally.",
        },
        {
            id: "project2",
            name: "EchoServe",
            screenshot: "https://i.ibb.co/hJ4BgJwj/Screenshot-2025-08-11-233732.png",
            techStack: "React, Firebase, Tailwind, NodeJS, MongoDB,css3,vue,express",
            description: "EchoServe is a comprehensive service review platform designed to connect users with reliable service providers in various fields. Built with Next.js and Firebase, it offers a seamless and fast user experience with real-time data synchronization. Users can browse, search, and filter services based on categories and ratings. The platform supports user authentication, allowing customers to submit reviews and ratings for services they have used. Service providers can manage their profiles and respond to feedback, fostering a trustworthy community. Tailwind CSS ensures a modern and responsive design that works well on all devices. EchoServe implements secure data handling and privacy measures to protect user information. Key challenges included optimizing page load speed and ensuring SEO friendliness. The project also features a dynamic dashboard for both users and providers, displaying service statistics and reviews. Future enhancements include adding multi-language support and an offline mode for uninterrupted access. Integration of AI-powered recommendations is planned to personalize user experience further. EchoServe aims to bridge the gap between consumers and service providers, ensuring transparency and quality. It is deployed on a scalable cloud platform for high availability. The project code is well-structured, making it easy to maintain and extend. Overall, EchoServe combines modern web technologies to deliver a robust and user-friendly service review ecosystem.",
            liveLink: "https://echo-serve.web.app/",
            githubClient: "https://github.com/miskaran2002/echo-serve-client",
            challenges: "During the development of EchoServe, optimizing the page load speed was a major challenge due to the dynamic content and real-time data fetching. Ensuring SEO friendliness in a Next.js application with client-side interactivity required careful server-side rendering strategies. Managing authentication and data security while maintaining smooth user experience was complex. Integrating Firebase for real-time updates demanded efficient state management to avoid performance bottlenecks. Designing a responsive and intuitive UI across different devices also posed some difficulties. Lastly, balancing feature richness with simplicity to keep the platform user-friendly took significant effort.",
            improvements: "For future improvements, EchoServe plans to implement multi-language support to reach a broader audience. Offline mode functionality will be added to improve usability during connectivity issues. Enhancing the UI with more interactive and customizable components is on the roadmap to boost user engagement. Real-time notifications for service updates will improve user communication. Strengthening security features, including role-based access control, is planned to protect sensitive data. Additionally, optimizing the backend APIs further will reduce latency. Integration with third-party analytics tools is also intended to gain better insights into user behavior.",
        },
        {
            id: "project3",
            name: "RacipeRealm",
            screenshot: "https://i.ibb.co/qYk5hJkp/Screenshot-2025-08-11-234044.png",
            techStack: "react, firebase, tailwind, nodejs, mongodb",
            description: "For RacipeRealm, future improvements include enhancing the user interface to make recipe browsing and management smoother and more intuitive. I plan to add advanced filtering and search options to help users find recipes quickly. Integrating social features like recipe sharing, comments, and ratings will improve community engagement. Adding user authentication with role-based access will secure the platform and personalize user experiences. I also aim to implement offline support so users can access recipes without internet connection. Improving performance and optimizing database queries will ensure faster load times. Finally, expanding the platform with mobile app support is on the roadmap to reach a wider audience..",
            liveLink: "https://recipe-realm-4ea1f.web.app/",
            githubClient: "https://github.com/miskaran2002/recipe-reliem",
            challenges: "Optimizing page load speed and SEO was challengingDuring the development of RacipeRealm, one of the major challenges was designing a flexible and efficient database schema to handle complex recipe data, including ingredients, steps, and user-generated content. Ensuring smooth communication between the frontend and backend APIs while maintaining data consistency was also difficult. Implementing secure user authentication and authorization, especially with role-based access, required careful planning. Optimizing performance to handle multiple simultaneous users without slowing down the app posed another challenge. Additionally, making the UI responsive across various devices and screen sizes took significant effort. Debugging and managing asynchronous operations during data fetching and updating was sometimes tricky. Handling error states gracefully and providing meaningful feedback to users was another area that needed attention.",
            improvements: "Add multi-language support and offline mode.For future improvements, I plan to enhance the user experience by adding advanced search and filtering options to help users find recipes more easily. Integrating AI-based recommendations to suggest recipes based on user preferences is also on the roadmap. Improving the UI/UX with more interactive features like drag-and-drop ingredient lists and video tutorials will make the app more engaging. I also aim to implement offline capabilities so users can access recipes without internet. Enhancing the review and rating system to include detailed feedback and user badges could increase community involvement. Furthermore, optimizing backend performance and scaling the database for larger user bases will ensure the app runs smoothly as it grows. Lastly, adding social media sharing and collaborative cooking features can boost user interaction and app popularity.",
        },
        {
            id: "project4",
            name: "Stockly",
            screenshot: "https://i.ibb.co.com/B5tKvwRD/Screenshot-2025-09-01-112704.png",
            techStack: "next.js 15, tailwindcss, daisyUI, mongodb, node.js",
            description: "Stockly is a modern e-commerce platform built with Next.js 15 that ensures blazing fast performance, SEO optimization, and smooth user experience. The app allows users to browse products, manage carts, and checkout with ease. With TailwindCSS and DaisyUI, the UI is sleek, responsive, and highly customizable. Advanced features like dynamic product filtering, secure authentication, and order tracking provide a seamless shopping journey. The platform is designed to scale for small to large businesses, offering flexibility and performance at every step.",
            liveLink: " https://next-stockly-app.vercel.app/",
            githubClient: " https://github.com/miskaran2002/next-stockly-app",
            challenges: "During Stockly's development, one major challenge was implementing real-time inventory management that updates instantly across the platform. Ensuring secure authentication, especially for both customers and admins, required careful role-based access control. Handling product images efficiently with Next.js optimization tools was another tricky part. Creating a scalable database schema for products, users, orders, and payments took significant planning. SEO optimization and improving page speed for large product catalogs also demanded extra effort. Finally, integrating third-party payment gateways while ensuring security and smooth UX was one of the biggest hurdles.",
            improvements: "For future improvements, I plan to add multi-language and multi-currency support to make Stockly more global. Integrating AI-based product recommendations and personalized shopping experiences will boost user engagement. I also aim to enhance the admin dashboard with analytics and automated inventory alerts. Expanding features like wishlist, product reviews, and loyalty rewards will make the platform more user-friendly. Furthermore, I plan to add PWA (Progressive Web App) support so users can shop offline. Lastly, optimizing backend performance for handling thousands of products and integrating with mobile apps will ensure Stockly is ready to scale into a full-featured e-commerce ecosystem."
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
        <section id="projects" className="min-h-screen px-6 md:px-20 py-20 text-white relative z-10">
            <h2 className="text-5xl font-extrabold mb-12 text-cyan-400 select-none text-center">Projects</h2>

            <motion.div
                className="grid gap-10 max-w-7xl mx-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative rounded-lg shadow-lg cursor-pointer overflow-hidden"
                        variants={cardVariants}
                        whileHover="hover"
                        onClick={() => openModal(project)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={project.screenshot}
                            alt={`${project.name} Screenshot`}
                            className="w-full max-h-[600px] object-contain bg-black"
                            style={{ margin: "0 auto" }}
                        />
                        <div
                            className={`absolute inset-0 bg-cyan-600 bg-opacity-60 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <h3 className="text-white text-3xl font-bold select-none">{project.name}</h3>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(project);
                                }}
                                className="flex items-center gap-2 bg-opacity-20 hover:bg-opacity-40 px-4 py-2 rounded text-white font-semibold transition"
                            >
                                View Details <FaPlus />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal */}
            {modalOpen && activeProject && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
                    <div className="bg-gray-900 rounded-lg max-w-3xl w-full p-6 relative text-white overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-cyan-400 text-3xl font-bold hover:text-cyan-600"
                            aria-label="Close Modal"
                        >
                            &times;
                        </button>

                        {/* Screenshot */}
                        <img
                            src={activeProject.screenshot}
                            alt={`${activeProject.name} Screenshot`}
                            className="w-full max-h-80 object-contain rounded-md mb-6"
                            style={{ margin: "0 auto" }}
                        />

                        <h3 className="text-4xl font-bold mb-3">{activeProject.name}</h3>

                        <p className="mb-6 text-gray-300">{activeProject.description}</p>

                        <div className="flex flex-wrap gap-3 mb-6">{renderTechPills(activeProject.techStack)}</div>

                        <div className="flex gap-4 mb-6">
                            {/* Live Link Button */}
                            <a
                                href={activeProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded font-semibold transition"
                            >
                                Live Demo <FaExternalLinkAlt />
                            </a>

                            {/* GitHub Client Button */}
                            <a
                                href={activeProject.githubClient}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded font-semibold transition"
                            >
                                GitHub <FaGithub />
                            </a>
                        </div>

                        {/* Challenges and Improvements */}
                        <p className="mb-4">
                            <strong>Challenges: </strong> {activeProject.challenges}
                        </p>

                        <p className="mb-4">
                            <strong>Improvements: </strong> {activeProject.improvements}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;

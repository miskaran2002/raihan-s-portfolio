import React from "react";
import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaLaptopCode,
    FaFileAlt,
    FaFootballBall,
    FaMusic,
    FaBriefcase,
    FaCogs,
    FaCheckCircle,
    FaCode,
    FaServer,
    FaDatabase
} from "react-icons/fa";

// Stagger animation container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

// Card animation
const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const AboutMe = () => {
    // 1. Core Cards (Education, Journey, Research, Hobbies)
    const cards = [
        {
            title: "Educational Qualification",
            badge: "CGPA: 3.57 / 4.00",
            icon: <FaGraduationCap className="text-cyan-400 text-3xl" />,
            desc: (
                <div className="space-y-2 text-gray-300 text-sm md:text-base">
                    <p>
                        Currently pursuing Bachelor of Science in <span className="text-cyan-300 font-semibold">Computer Science & Engineering</span> at <span className="text-white font-semibold">University of Barishal</span>.
                    </p>
                    <p>
                        Achieved academic GPA of <span className="text-cyan-400 font-bold">3.57 out of 4.00</span> in 3rd Year 2nd Semester, securing <span className="text-green-400 font-bold">A+</span> in <i>Simulation & Modelling</i>.
                    </p>
                    <p className="text-xs text-gray-400">
                        Coursework: Web Engineering, Database Systems, Compiler Design, Automata Theory, Operating Systems.
                    </p>
                </div>
            )
        },
        {
            title: "Programming Journey",
            badge: "Full-Stack Web",
            icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
            desc: (
                <div className="space-y-2 text-gray-300 text-sm md:text-base">
                    <p>
                        Started my coding journey with C and C++, building strong fundamentals in data structures, algorithms, and logical problem solving.
                    </p>
                    <p>
                        Gradually transitioned into full-stack web development using <span className="text-cyan-300 font-medium">React, TypeScript, Node.js, Express, PostgreSQL, Prisma, & MongoDB</span> to build modern digital products.
                    </p>
                </div>
            )
        },
        {
            title: "Research Work",
            badge: "Publication",
            icon: <FaFileAlt className="text-cyan-400 text-3xl" />,
            desc: (
                <div className="space-y-2 text-gray-300 text-sm md:text-base">
                    <p>
                        Authored a research paper titled{" "}
                        <a
                            href="https://www.dropbox.com/scl/fi/fqlqoo5l4zjlzli5io287/THE_IMPACT_OF_ARTIFICIAL_INTELLIGENCE_ON_JOB_AUTOMATION.pdf?rlkey=4hwdl91oqseitohih7qgv888x&st=55nosv1h&dl=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 font-semibold underline hover:text-cyan-300 transition-colors"
                        >
                            THE IMPACT OF AI ON JOB AUTOMATION
                        </a>.
                    </p>
                    <p>
                        Analyzed industry transformation and human-AI collaboration trends. Presented in a university seminar with positive evaluation from faculty.
                    </p>
                </div>
            )
        },
        {
            title: "Hobbies & Personality",
            badge: "Life Beyond Code",
            icon: (
                <div className="flex gap-2 text-cyan-400 text-2xl">
                    <FaFootballBall />
                    <FaMusic />
                </div>
            ),
            desc: (
                <div className="space-y-2 text-gray-300 text-sm md:text-base">
                    <p>
                        I play football regularly with my university team to keep myself active and maintain strong team-player mindset.
                    </p>
                    <p>
                        Also enjoy playing guitar, listening to diverse music, and exploring emerging technological advancements to stay creative.
                    </p>
                </div>
            )
        }
    ];

    // 2. Professional Experience
    const experiences = [
        {
            role: "Shadow Intern",
            organization: "Endgame Shadow Internship Program",
            period: "Selected in 2025",
            details: "Collaborated in large-scale software project workflows, agile methodologies, and team development cycles."
        },
        {
            role: "Software Trainee",
            organization: "Next Level AI-Driven Software Engineering Bootcamp",
            period: "2026 - Present",
            details: "Mastering advanced full-stack development, modern AI tools integration, automated testing, and cloud deployment pipelines."
        },
        {
            role: "Career Project Participant",
            organization: "SCIC-11 Career Development Project",
            period: "2025",
            details: "Completed intensive practical web development tasks, coding challenges, and professional project presentations."
        }
    ];

    // 3. Services / Capabilities
    const services = [
        {
            title: "Frontend Development",
            icon: <FaCode className="text-cyan-400 text-2xl" />,
            desc: "Building dynamic, pixel-perfect, and ultra-responsive user interfaces using React, Tailwind CSS, and Framer Motion."
        },
        {
            title: "Backend & API Design",
            icon: <FaServer className="text-cyan-400 text-2xl" />,
            desc: "Designing secure, scalable RESTful APIs with Node.js, Express.js, JWT Authentication, and Stripe payment gateways."
        },
        {
            title: "Database Management",
            icon: <FaDatabase className="text-cyan-400 text-2xl" />,
            desc: "Modeling relational and non-relational database schemas using PostgreSQL, Prisma ORM, and MongoDB Atlas."
        }
    ];

    return (
        <section id="about" className="min-h-screen px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24 relative z-10 text-white">
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Header & Main Intro with Image */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                    
                    {/* Left: Styled Image Frame */}
                    <motion.div
                        className="w-full lg:w-5/12 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group max-w-sm w-full">
                            {/* Cyan Glow effect behind image */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                            
                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/40 bg-gray-900 shadow-2xl">
                                <img
                                    src="https://i.ibb.co.com/X1pRHbn/about-page.jpg"
                                    alt="Md Raihan Uddin"
                                    className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center transform group-hover:scale-105 transition duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Intro Text Content */}
                    <motion.div
                        className="w-full lg:w-7/12 text-center lg:text-left"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-cyan-400 tracking-wide">
                            About Me
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                            I am <span className="text-white font-semibold">Md Raihan Uddin</span>, a passionate Full Stack Developer and Computer Science & Engineering student at the University of Barishal. I focus on bridging complex backend logic with beautiful, responsive user interfaces.
                        </p>

                        {/* Quick Badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                                💻 Full Stack Web Developer
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                                🎓 University of Barishal (CSE)
                            </span>
                        </div>

                        {/* Languages */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-300">
                            <span className="text-gray-400 font-medium">Languages:</span>
                            <span className="px-2.5 py-1 rounded bg-gray-800/80 border border-gray-700/60">🇧🇩 Bangla</span>
                            <span className="px-2.5 py-1 rounded bg-gray-800/80 border border-gray-700/60">🇬🇧 English</span>
                            <span className="px-2.5 py-1 rounded bg-gray-800/80 border border-gray-700/60">🇮🇳 Hindi</span>
                        </div>
                    </motion.div>
                </div>

                {/* 1. Core Background Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700/50">
                                        {card.icon}
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-900/40 text-cyan-300 border border-cyan-700/50">
                                        {card.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-cyan-400">
                                    {card.title}
                                </h3>
                                <div>{card.desc}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 2. Professional Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FaBriefcase className="text-cyan-400 text-2xl sm:text-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            Experience & Professional Training
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {experiences.map((exp, i) => (
                            <div key={i} className="bg-gray-900/60 rounded-xl p-6 border border-gray-800/80 hover:border-cyan-500/30 transition">
                                <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40">
                                    {exp.period}
                                </span>
                                <h4 className="text-lg font-bold text-white mt-3">{exp.role}</h4>
                                <p className="text-cyan-300 text-sm font-medium mb-2">{exp.organization}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{exp.details}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 3. What I Do / Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FaCogs className="text-cyan-400 text-2xl sm:text-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            What I Bring To The Table
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((srv, i) => (
                            <div key={i} className="bg-gray-900/60 rounded-xl p-6 border border-gray-800/80 hover:border-cyan-500/30 transition flex flex-col justify-between">
                                <div>
                                    <div className="mb-4">{srv.icon}</div>
                                    <h4 className="text-xl font-bold text-white mb-2">{srv.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
                                </div>
                                <div className="mt-4 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                                    <FaCheckCircle /> Quality Guaranteed
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutMe;
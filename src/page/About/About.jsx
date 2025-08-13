import React from "react";
import { motion } from "framer-motion";
import {
    FaUniversity,
    FaFileAlt,
    FaFootballBall,
    FaMusic,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaDownload,
} from "react-icons/fa";
import jsPDF from "jspdf";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

const AboutMe = () => {
    const downloadResume = () => {
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.height;
        let y = 20;

        const checkPageBreak = (lines = 1) => {
            if (y + lines * 7 > pageHeight - 20) {
                doc.addPage();
                y = 20;
            }
        };

        const addText = (
            text,
            x,
            fontStyle = "normal",
            size = 12,
            color = [0, 0, 0],
            link = null,
            maxWidth = 160,
            lineGap = 7
        ) => {
            checkPageBreak();
            doc.setFontSize(size);
            doc.setFont(undefined, fontStyle);
            doc.setTextColor(...color);
            if (link) {
                doc.textWithLink(text, x, y, { url: link });
            } else {
                doc.text(text, x, y, { maxWidth });
            }
            doc.setTextColor(0, 0, 0);
            y += lineGap;
        };

        // === HEADER ===
        addText("Md Raihan Uddin", 20, "bold", 18);
        addText("Mern Stack Developer", 20, "normal", 12);
        addText("Barishal, Bangladesh", 20, "normal", 12);

        // Contact Info (Right Side)
        doc.setFontSize(10);
        doc.setTextColor(0, 102, 204);
        doc.textWithLink(
            "Email: raihanuddin.cse8.bu@gmail.com",
            190 - doc.getTextWidth("Email: raihanuddin.cse8.bu@gmail.com"),
            20,
            { url: "mailto:raihanuddin.cse8.bu@gmail.com" }
        );
        doc.textWithLink(
            "Phone: +880 1608 822 317",
            190 - doc.getTextWidth("Phone: +880 1608 822 317"),
            27,
            { url: "tel:+8801608822317" }
        );
        doc.textWithLink(
            "LinkedIn",
            190 - doc.getTextWidth("LinkedIn"),
            34,
            { url: "https://www.linkedin.com/in/md-raihan-uddin-cse8/" }
        );
        doc.textWithLink(
            "GitHub",
            190 - doc.getTextWidth("GitHub"),
            41,
            { url: "https://github.com/miskaran2002" }
        );
        doc.textWithLink(
            "Facebook",
            190 - doc.getTextWidth("Facebook"),
            48,
            { url: "https://www.facebook.com/miskatujjaman.raihan" }
        );

        doc.setTextColor(0, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(20, 55, 190, 55);
        y = 62;

        // === TECHNICAL SKILLS ===
        addText("TECHNICAL SKILLS", 20, "bold", 14);
        const techSkills = {
            "Front-End": [
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "DaisyUI",
                "React Router",
            ],
            "Back-End": [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase Authentication",
                "Stripe",
            ],
            "Tools & Technologies": ["VS Code", "Git", "GitHub", "Postman"],
            "Version Control": ["Git", "GitHub"],
        };
        Object.entries(techSkills).forEach(([section, skills]) => {
            addText(section + ":", 25, "bold");
            addText(skills.join(", "), 60);
        });

        // === PROJECTS ===
        addText("PROJECTS", 20, "bold", 14);
        const projects = [
            {
                name: "Recipe Realm",
                desc: [
                    "Full-stack recipe management platform with recipe CRUD features.",
                    "User authentication via Firebase with JWT-secured APIs.",
                    "Advanced filtering by cuisine, ingredient, and cook time.",
                    "Like system to highlight popular recipes.",
                    "Responsive UI with Tailwind & DaisyUI.",
                    "Optimized MongoDB queries for speed.",
                    "Secure API endpoints.",
                    "Deployed for high availability.",
                ],
                live: "https://recipe-realm-4ea1f.web.app/",
                github: "https://github.com/miskaran2002/recipe-reliem",
                tech: "React.js, Node.js, MongoDB, Express.js, Firebase",
            },
            {
                name: "EchoServe",
                desc: [
                    "Service review platform connecting users with providers.",
                    "Built with Next.js for speed and SEO.",
                    "Real-time updates with Firebase.",
                    "Advanced search & category-based filters.",
                    "Secure authentication for both sides.",
                    "Provider dashboard with analytics.",
                    "Responsive design.",
                    "Future: multi-language, offline mode, AI suggestions.",
                ],
                live: "https://echo-serve.web.app/",
                github: "https://github.com/miskaran2002/echo-serve-client",
                tech: "React.js, Node.js, MongoDB, Express.js, JWT",
            },
            {
                name: "HeartBridge Matrimony",
                desc: [
                    "Matrimonial platform for Bangladeshi users.",
                    "Biodata creation & management with photo uploads.",
                    "Premium visibility features.",
                    "Stripe payment integration.",
                    "Matching algorithm based on preferences.",
                    "Secure role-based authentication.",
                    "Responsive UI.",
                    "Optimized backend for fast search.",
                ],
                live: "https://heart-bridge-f100e.web.app/",
                github:
                    "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-miskaran2002",
                tech: "React.js, Node.js, MongoDB, Express.js, Stripe",
            },
        ];

        projects.forEach((p) => {
            addText(p.name, 25, "bold");
            p.desc.forEach((d) =>
                addText("• " + d, 30, "normal", 12, [0, 0, 0], null, 150)
            );
            addText(`Live: ${p.live}`, 30, "normal", 12, [0, 102, 204], p.live);
            addText(`GitHub: ${p.github}`, 30, "normal", 12, [0, 102, 204], p.github);
            addText("Technologies: " + p.tech, 30);
            y += 5;
        });

        // === EDUCATION ===
        addText("EDUCATION", 20, "bold", 14);
        [
            "University of Barisal – BSc in Computer Science & Engineering (CSE)",
            "Session: 2021 - Present | Current CGPA: 3.43",
            "Milestone College – Higher Secondary Certificate (Science Group)",
            "Passing Year: 2020 | GPA: 5.00/5.00",
            "Taslima Memorial Academy – Secondary School Certificate (Science Group)",
            "Passing Year: 2018 | GPA: 5.00/5.00",
        ].forEach((e) => addText(e, 25));

        // === LANGUAGES ===
        addText("LANGUAGES", 20, "bold", 14);
        ["Bangla (Native)", "English (Fluent)", "Hindi (Conversational)"].forEach(
            (lang) => addText(lang, 25)
        );

        // === HOBBIES ===
        addText("HOBBIES & ACTIVITIES", 20, "bold", 14);
        [
            "Football player and enthusiast",
            "Music lover and guitarist",
            "Lifelong learner and problem solver",
        ].forEach((h) => addText(h, 25));

        doc.save("Md_Raihan_Uddin_Resume.pdf");
    };

    return (
        <section
            id="about"
            className="min-h-screen px-6 md:px-20 py-20 relative z-10 text-white"
        >
            {/* Intro */}
            <div className="max-w-4xl mx-auto mb-12 text-center md:text-left">
                <h2 className="text-5xl font-extrabold mb-6 text-cyan-400 select-none">
                    About Me
                </h2>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    I am Md Raihan Uddin, a passionate Computer Science & Engineering
                    student at University of Barisal. With a strong background in
                    programming and web development, I enjoy building innovative digital
                    solutions. Outside coding, I love sports and music which keep me
                    balanced and creative.
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-6 mb-8">
                    <a
                        href="https://github.com/miskaran2002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white hover:text-cyan-400 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-raihan-uddin-cse8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white hover:text-cyan-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/MdRaihanUd57710"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white hover:text-cyan-400 transition"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.facebook.com/miskatujjaman.raihan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white hover:text-cyan-400 transition"
                    >
                        <FaFacebook />
                    </a>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                    {[
                        { flag: "🇧🇩", label: "Bangla" },
                        { flag: "🇬🇧", label: "English" },
                        { flag: "🇮🇳", label: "Hindi" },
                    ].map((lang) => (
                        <div
                            key={lang.label}
                            className="flex items-center gap-2 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-lg shadow"
                        >
                            <span role="img" aria-label={lang.label} className="text-xl">
                                {lang.flag}
                            </span>
                            {lang.label}
                        </div>
                    ))}
                </div>

                {/* Download Resume Button */}
                <div className="flex justify-center md:justify-start mb-12">
                    <button
                        onClick={downloadResume}
                        className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded font-semibold shadow-lg"
                    >
                        <FaDownload className="text-white text-lg" />
                        <span className="text-white">Download Resume</span>
                    </button>
                </div>
            </div>

            {/* Animated Words & Cards */}
            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-start md:items-stretch">
                {/* Left Side Words */}
                <motion.div
                    className="flex flex-col justify-center space-y-6 text-3xl md:text-5xl font-bold tracking-wide flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        "Programming Journey",
                        "Passion for Development",
                        "Creative Mind",
                        "Lifelong Learner",
                        "Football Enthusiast",
                        "Music Lover",
                        "Problem Solver",
                    ].map((word) => (
                        <motion.div key={word} variants={boxVariants}>
                            {word}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Right Side Cards */}
                <motion.div
                    className="space-y-8 flex-1 flex flex-col justify-between"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* University */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-center gap-4 shadow-lg cursor-pointer"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <FaUniversity className="text-cyan-400 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold mb-1">University</h3>
                            <p>
                                Currently studying Computer Science & Engineering at{" "}
                                <span className="text-cyan-400 font-semibold">
                                    University of Barisal
                                </span>
                                .
                            </p>
                        </div>
                    </motion.div>

                    {/* Research Paper */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-center gap-4 shadow-lg cursor-pointer"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <FaFileAlt className="text-cyan-400 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold mb-1">Research Paper</h3>
                            <p>
                                Authored research paper on{" "}
                                <a
                                    href="https://www.dropbox.com/scl/fi/fqlqoo5l4zjlzli5io287/THE_IMPACT_OF_ARTIFICIAL_INTELLIGENCE_ON_JOB_AUTOMATION.pdf?rlkey=4hwdl91oqseitohih7qgv888x&st=55nosv1h&dl=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 font-semibold underline"
                                >
                                    THE IMPACT OF ARTIFICIAL INTELLIGENCE ON JOB AUTOMATION
                                </a>
                                .
                            </p>
                        </div>
                    </motion.div>

                    {/* Programming Journey */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 shadow-lg cursor-pointer flex-1"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                            Programming Journey
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            I started my programming journey with C and C++ during my early
                            university days. Gradually, I fell in love with web development,
                            mastering React, Node.js, and MongoDB to build full-stack
                            applications.
                        </p>
                    </motion.div>

                    {/* Hobbies */}
                    <motion.div
                        className="bg-gray-900 bg-opacity-80 rounded-lg p-6 flex items-center gap-4 shadow-lg cursor-pointer"
                        variants={boxVariants}
                        whileHover="hover"
                    >
                        <FaFootballBall className="text-cyan-400 text-4xl" />
                        <FaMusic className="text-cyan-400 text-4xl" />
                        <div>
                            <h3 className="text-xl font-semibold mb-1">
                                Hobbies & Interests
                            </h3>
                            <p>
                                I enjoy playing football, listening to music, and sometimes
                                jamming with friends on guitar.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;

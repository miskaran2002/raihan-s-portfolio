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
    FaLaptopCode,
} from "react-icons/fa";

// Container for staggered children
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};

// Card variants with smooth slide in from left/right
const cardVariants = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { duration: 0.3, ease: "easeInOut" } },
});

// Intro section fade in
const introVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


const AboutMe = () => {
    const cards = [
        {
            title: "University",
            icon: <FaUniversity className="text-cyan-400 text-3xl" />,
            desc: `I am currently pursuing my Bachelor of Science in Computer Science & Engineering at the University of Barisal.  
    My academic journey has allowed me to develop a strong foundation in programming, algorithms, and data structures.  
    I actively participate in workshops and seminars to stay updated with the latest technologies.  
    I enjoy collaborative projects and coding competitions organized by the university.  
    Courses like Web Development, Database Management, and Software Engineering have strengthened my technical skills.  
    I am also involved in extracurricular clubs, particularly those related to technology and innovation.  
    The university environment encourages problem-solving, creativity, and continuous learning.  
    I aim to graduate with a strong CGPA and practical experience that will help in my professional career.`,
            direction: "left",
        },
        {
            title: "Research Paper",
            icon: <FaFileAlt className="text-cyan-400 text-3xl" />,
            desc: (
                <>
                    I authored a research paper titled{" "}
                    <a
                        href="https://www.dropbox.com/scl/fi/fqlqoo5l4zjlzli5io287/THE_IMPACT_OF_ARTIFICIAL_INTELLIGENCE_ON_JOB_AUTOMATION.pdf?rlkey=4hwdl91oqseitohih7qgv888x&st=55nosv1h&dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 font-semibold underline"
                    >
                        THE IMPACT OF ARTIFICIAL INTELLIGENCE ON JOB AUTOMATION
                    </a>
                    .
                    The research explores how AI is transforming industries and automating repetitive tasks.
                    I conducted an extensive review of existing literature and current AI applications.
                    The paper analyzes both the positive and negative impacts on employment trends.
                    I collected case studies and statistical data to support my findings.
                    My work emphasizes the need for upskilling and human-AI collaboration.
                    The paper was presented in a university seminar and received positive feedback from professors.
                    It strengthened my research, analytical, and technical writing skills.
                    This experience motivated me to explore AI integration in practical web applications.
                </>
            ),
        },
        {
            title: "Programming Journey",
            icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
            desc: `I began my programming journey learning C and C++ during my early university days.  
    These languages helped me understand core programming concepts like loops, conditions, and data structures.  
    Gradually, I developed an interest in web development and modern frameworks.  
    I learned HTML, CSS, and JavaScript to build interactive websites.  
    My curiosity led me to React.js, Node.js, and MongoDB for full-stack development.  
    I worked on personal projects to apply my knowledge and improve coding skills.  
    Online tutorials, coding communities, and challenges played a key role in my growth.  
    Today, I enjoy building real-world applications with responsive UI and secure backend.  
    I continuously experiment with new technologies and follow best practices in coding.`,
            direction: "left",
        },
        {
            title: "Hobbies & Interests",
            icon: (
                <>
                    <FaFootballBall className="text-cyan-400 text-3xl" />
                    <FaMusic className="text-cyan-400 text-3xl" />
                </>
            ),
            desc: `I am passionate about football and enjoy playing regularly with friends and university teams.  
    Sports help me stay active, focused, and develop teamwork skills.  
    I also love music, especially playing guitar and discovering new genres.  
    Music provides a creative outlet and helps me relax after coding sessions.  
    Reading tech blogs, books, and articles is another hobby that keeps me informed.  
    I enjoy problem-solving challenges like puzzles and programming contests.  
    Traveling and exploring new cultures inspire me and broaden my perspective.  
    These activities balance my professional and personal life, keeping me motivated and creative.`,
            direction: "right",
        },
    ];

    return (
        <section id="about" className="min-h-screen px-6 md:px-20 py-20 relative z-10 text-white">
            {/* Intro */}
            <motion.div
                className="max-w-4xl mx-auto mb-12 text-center md:text-left"
                variants={introVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-5xl font-extrabold mb-6 text-cyan-400 select-none">
                    About Me
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                    I am Md Raihan Uddin, a passionate Computer Science & Engineering student at University of Barisal. With a strong background in programming and web development, I enjoy building innovative digital solutions. Outside coding, I love sports and music which keep me balanced and creative.
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-6 mb-8">
                    <a href="https://github.com/miskaran2002" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/md-raihan-uddin-cse8/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition"><FaLinkedin /></a>
                    <a href="https://x.com/MdRaihanUd57710" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition"><FaTwitter /></a>
                    <a href="https://www.facebook.com/miskatujjaman.raihan" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-cyan-400 transition"><FaFacebook /></a>
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
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-shadow shadow-md"
                        >
                            <span role="img" aria-label={lang.label} className="text-xl">
                                {lang.flag}
                            </span>
                            <span className="text-white font-medium">{lang.label}</span>
                        </div>
                    ))}
                </div>


                {/* Download Resume */}
                <div className="flex justify-center md:justify-start mb-12">
                    <a href="https://drive.google.com/uc?export=download&id=1YuQl_pWqQAgotpM3h7f-FT8XXH-UTtEa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded font-semibold shadow-lg" download>
                        <FaDownload className="text-white text-lg" />
                        <span className="text-white">Download Resume</span>
                    </a>
                </div>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="flex flex-col gap-6 max-w-4xl mx-auto text-gray-300"
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        className="rounded-lg p-6 shadow-lg flex gap-4 bg-gray-900 bg-opacity-80"
                        initial={{ opacity: 0, x: card.direction === "left" ? -80 : 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    >
                        {card.icon && <div className="flex gap-2">{card.icon}</div>}
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-cyan-400">{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>



        </section>
    );
};

export default AboutMe;

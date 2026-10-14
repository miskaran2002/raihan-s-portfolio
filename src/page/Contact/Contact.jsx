import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaPen, FaPaperPlane, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [sending, setSending] = useState(false);

    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.subject.trim()) errors.subject = "Subject is required";
        if (!formData.message.trim()) errors.message = "Message is required";
        return errors;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            setSending(true);

            const serviceID = "service_gmysrk5";
            const templateID = "template_sf9pyxi";
            const publicKey = "Njha-oR6G_xlbujsD";

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            emailjs
                .send(serviceID, templateID, templateParams, publicKey)
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        setSuccess(true);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                        setSending(false);
                        setTimeout(() => setSuccess(false), 5000); 
                    },
                    (err) => {
                        console.error("FAILED...", err);
                        setSuccess(false);
                        setSending(false);
                        alert("Failed to send message, please try again later.");
                    }
                );
        } else {
            setErrors(validationErrors);
            setSuccess(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section
            id="contact"
            className="min-h-screen px-6 md:px-20 py-24 text-white relative z-10 flex items-center justify-center"
            style={{ background: "transparent" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl w-full mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold mb-4 text-cyan-400 select-none tracking-wide">
                        Let's Connect
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
                    
                    {/* Left Side - Contact Info */}
                    <motion.div variants={itemVariants} className="flex-1 max-w-md lg:pr-10">
                        <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-cyan-900/50 text-cyan-400 rounded-lg flex items-center justify-center text-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                                            <a href="mailto:raihanuddin.cse8.bu@gmail.com" className="text-gray-200 hover:text-cyan-400 transition-colors break-all">
                                                raihanuddin.cse8.bu@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-cyan-900/50 text-cyan-400 rounded-lg flex items-center justify-center text-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                                            <FaPhoneAlt />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium mb-1">Phone</p>
                                            <a href="tel:+8801608822317" className="text-gray-200 hover:text-cyan-400 transition-colors">
                                                +880 1608 822 317
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-cyan-900/50 text-cyan-400 rounded-lg flex items-center justify-center text-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                                            <FaWhatsapp />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium mb-1">WhatsApp</p>
                                            <a href="https://wa.me/8801608822137" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-cyan-400 transition-colors">
                                                +880 1608 822 137
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-cyan-900/50 text-cyan-400 rounded-lg flex items-center justify-center text-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                                            <p className="text-gray-200">
                                                University of Barishal,<br/> Barishal, Bangladesh
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-10 pt-8 border-t border-gray-800">
                                <p className="text-sm text-gray-400 font-medium mb-4">Find me on</p>
                                <div className="flex gap-4">
                                    <a href="https://github.com/miskaran2002" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-gray-300 hover:text-white hover:bg-[#333] rounded-full flex items-center justify-center text-xl transition-all hover:scale-110">
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/md-raihan-uddin-cse8/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-gray-300 hover:text-white hover:bg-[#0077b5] rounded-full flex items-center justify-center text-xl transition-all hover:scale-110">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div variants={itemVariants} className="flex-1 w-full max-w-2xl">
                        <form onSubmit={handleSubmit} className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 text-white">Send me a Message</h3>
                            <div className="space-y-5">
                                {/* Name Field */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                        <FaUser />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className={`w-full rounded-lg pl-11 pr-4 py-3.5 bg-gray-800/80 border ${errors.name ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-cyan-500"} text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors`}
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        disabled={sending}
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.name}</p>}
                                </div>

                                {/* Email Field */}
                                <div className="relative mt-7">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                        <FaEnvelope />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className={`w-full rounded-lg pl-11 pr-4 py-3.5 bg-gray-800/80 border ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-cyan-500"} text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors`}
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        disabled={sending}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.email}</p>}
                                </div>

                                {/* Subject Field */}
                                <div className="relative mt-7">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                        <FaPen />
                                    </div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className={`w-full rounded-lg pl-11 pr-4 py-3.5 bg-gray-800/80 border ${errors.subject ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-cyan-500"} text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors`}
                                        value={formData.subject}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        disabled={sending}
                                    />
                                    {errors.subject && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.subject}</p>}
                                </div>

                                {/* Message Field */}
                                <div className="relative mt-7">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message..."
                                        rows="5"
                                        className={`w-full rounded-lg p-4 bg-gray-800/80 border ${errors.message ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-cyan-500"} text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none transition-colors custom-scrollbar`}
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={sending}
                                    />
                                    {errors.message && <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{errors.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: sending ? 1 : 1.02 }}
                                    whileTap={{ scale: sending ? 1 : 0.98 }}
                                    type="submit"
                                    className={`mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white transition-all shadow-lg ${sending ? 'bg-cyan-800 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-500 hover:shadow-cyan-500/25'}`}
                                    disabled={sending}
                                >
                                    {sending ? (
                                        <>Sending <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                                    ) : (
                                        <>Send Message <FaPaperPlane /></>
                                    )}
                                </motion.button>

                                {/* Success Message */}
                                <AnimatePresence>
                                    {success && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mt-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg text-green-400 text-center font-medium text-sm"
                                        >
                                            Thank you! Your message has been successfully sent.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
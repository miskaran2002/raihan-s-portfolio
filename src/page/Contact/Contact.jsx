import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

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
            // Simulate sending message
            console.log("Message sent:", formData);
            setSuccess(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
        } else {
            setErrors(validationErrors);
            setSuccess(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            id="contact"
            className="min-h-screen px-6 md:px-20 py-20 text-white flex flex-col md:flex-row gap-12 relative z-10"
            style={{ background: "transparent" }} // no background to show particles
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Contact Form */}
            <div className="flex-1 max-w-xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-8 text-cyan-400 text-center md:text-left select-none drop-shadow-md">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 font-semibold text-white drop-shadow-md"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`w-full rounded px-4 py-2 text-black bg-white ${errors.name ? "border-2 border-red-500" : ""
                                }`}
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.name && (
                            <p className="text-red-500 mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 font-semibold text-white drop-shadow-md"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`w-full rounded px-4 py-2 text-black bg-white ${errors.email ? "border-2 border-red-500" : ""
                                }`}
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.email && (
                            <p className="text-red-500 mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 font-semibold text-white drop-shadow-md"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className={`w-full rounded px-4 py-2 text-black bg-white ${errors.subject ? "border-2 border-red-500" : ""
                                }`}
                            value={formData.subject}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.subject && (
                            <p className="text-red-500 mt-1">{errors.subject}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 font-semibold text-white drop-shadow-md"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className={`w-full rounded px-4 py-2 text-black bg-white resize-y ${errors.message ? "border-2 border-red-500" : ""
                                }`}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && (
                            <p className="text-red-500 mt-1">{errors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded font-semibold w-full"
                    >
                        Send Message
                    </button>

                    {success && (
                        <p className="text-green-400 mt-4 text-center font-semibold drop-shadow-md">
                            Thank you! Your message has been sent.
                        </p>
                    )}
                </form>
            </div>

            {/* Contact Info */}
            <div className="flex-1 max-w-md mx-auto select-none">
                <h3 className="text-3xl font-bold mb-6 drop-shadow-md">Get in Touch</h3>
                <p className="mb-4 drop-shadow-md">
                    <strong>Email:</strong>{" "}
                    <a
                        href="mailto:raihanuddin.cse8.bu@gmail.com"
                        className="underline hover:text-cyan-300"
                    >
                        raihanuddin.cse8.bu@gmail.com
                    </a>
                </p>
                <p className="mb-4 drop-shadow-md">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+8801608822317" className="underline hover:text-cyan-300">
                        +880 1608 822 317
                    </a>
                </p>
                <p className="mb-4 drop-shadow-md">
                    <strong>WhatsApp:</strong>{" "}
                    <a
                        href="https://wa.me/8801608822137"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-cyan-300"
                    >
                        +880 1608 822 137
                    </a>
                </p>
            </div>
        </motion.section>
    );
};

export default Contact;

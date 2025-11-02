"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "خانه", href: "#home" },
        { name: "درباره ما", href: "#about" },
        { name: "مهارت‌ها", href: "#skille" },
        { name: "توانایی ها", href: "#projects" },
        { name: "تماس با ما", href: "#contact" },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    // انیمیشن آیتم‌ها
    const itemVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
        }),
    };

    return (
        <nav dir="rtl" className="fixed top-0 right-0 w-full bg-white z-50 border-b border-gray-200 font-vazir shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* دکمه منوی موبایل */}
                <button
                    className="md:hidden text-gray-800 text-2xl font-bold p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✖" : "☰"}
                </button>

                {/* منوی دسکتاپ */}
                <ul className="hidden md:flex flex-row gap-10 justify-end text-gray-800">
                    {navItems.map((item) => (
                        <li key={item.name} className="text-right">
                            <a
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="hover:text-blue-500 transition-colors font-medium"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* منوی موبایل وسط‌چین با انیمیشن */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden bg-white border-t border-gray-200 shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ul className="flex flex-col items-center justify-center py-6 space-y-6 text-gray-800 text-center">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={itemVariants}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleScroll(e, item.href)}
                                        className="hover:text-blue-500 transition-colors text-2xl font-bold"
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

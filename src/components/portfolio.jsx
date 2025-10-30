"use client";
import { motion } from "framer-motion";

const projects = [
    {
        title: "طراحی وب‌سایت فروشگاهی",
        description: "طراحی و پیاده‌سازی وب‌سایت فروشگاهی با React و Tailwind",
        image: "/images/Shop.svg.png",
        link: "#",
    },
    {
        title: "پنل مدیریت سوپرمارکت",
        description: "پنل حرفه‌ای برای مدیریت کالا، فروشنده و گزارشات مالی",
        image: "/images/wm.jpg",
        link: "#",
    },
    {
        title: "سایت شخصی و رزومه",
        description: "طراحی رابط کاربری واکنش‌گرا و مدرن برای معرفی شخصی و مهارت‌ها",
        image: "/images/pf.jpg",
        link: "#",
    },
];

export default function Portfolio() {
    return (
        <section className="min-h-screen py-20 relative" id="projects">
            <div className="relative max-w-6xl mx-auto px-6">
                <motion.h1
                    className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    نمونه‌کارهای من
                </motion.h1>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                                >
                                    مشاهده پروژه
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

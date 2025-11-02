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
        title: "پنل مدیریت",
        description: "پنل حرفه‌ای برای مدیریت کالا، فروشنده و گزارشات مالی",
        image: "/images/wm.jpg",
        link: "#",
    },
    {
        title: "سایت شخصی و رزومه",
        description: "طراحی رابط کاربری واکنش‌گرا و مدرن برای معرفی شخصی و مهارت‌ها",
        image: "/images/personal-website.png",
        link: "#",
    },
    {
        title: "برنامه نویسی ویندوز",
        description: "طراحی نرم افزارهای حسابداری و مدیریتی با زبان #C برای ویندوز",
        image: "/images/csharp.jpg",
        link: "#",
    },
    {
        title: "پایگاه داده",
        description: "طراحی و مدیریت پایگاه داده برای اپلیکیشن‌های وب و دسکتاپ",
        image: "/images/database.jpeg",
        link: "#",
    },
    {
        title: "سایر مهارت‌ها",
        description: "تجربه در بازی‌سازی با Unity و امور شبکه‌های کامپیوتری",
        image: "/images/other.jpg",
        link: "#",
    },
];

export default function Portfolio() {
    return (
        <section className="min-h-screen py-20 relative" id="projects" dir="rtl">
            <div className="relative max-w-6xl mx-auto px-6">
                <motion.h1
                    className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    توانایی‌های برنامه‌نویسی
                </motion.h1>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-right">
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
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

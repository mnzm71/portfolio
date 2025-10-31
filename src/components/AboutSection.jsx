"use client";
import { motion } from "framer-motion";
import { Code, User, Monitor, Gamepad2, Briefcase } from "lucide-react";

export const AboutSection = () => {
    const skills = [
        { icon: Code, title: "توسعه وب", desc: "React, Next.js, Tailwind" },
        { icon: User, title: "طراحی UI/UX", desc: "رابط‌های مدرن و تعاملی" },
        { icon: Monitor, title: "برنامه‌نویسی ویندوز", desc: "C# و WPF / WinForms" },
        { icon: Gamepad2, title: "بازی‌سازی", desc: "Unity و C#" },
        { icon: Briefcase, title: "مدیریت پروژه", desc: "از ایده تا اجرا" },
    ];

    return (
        <section id="about" className="py-24 px-4 relative" dir="rtl">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    درباره <span className="text-primary">من</span>
                </motion.h2>

                {/* --- متن اصلی درباره من --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-right max-w-3xl mx-auto mb-16"
                >
                    <p className="text-muted-foreground leading-relaxed">
                        سلام! من <span className="font-semibold text-primary">محمد نادی‌زاده میرزایی</span> هستم — مهندس کامپیوتر و توسعه‌دهنده‌ی رابط کاربری (Front-End Developer) با علاقه‌ی عمیق به طراحی تجربه‌ی کاربری مدرن، تمیز و سریع.
                        از ترکیب <strong>خلاقیت در طراحی</strong> و <strong>دقت فنی در کدنویسی</strong> لذت می‌برم؛ هدفم اینه که هر پروژه‌ای نه فقط درست کار کنه، بلکه زیبا و منحصربه‌فرد هم باشه.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        در مسیر کارم با ابزارهایی مثل <strong>Next.js</strong>، <strong>React</strong>، <strong>Tailwind CSS</strong> و <strong>Prisma</strong> کار می‌کنم و معمولاً پروژه‌هام شامل ساخت پنل‌های مدیریتی، وب‌سایت‌های شخصی و فروشگاهی هستن.
                        علاوه بر جنبه فنی، به طراحی هویت بصری، انیمیشن‌های نرم، و ریسپانسیو بودن کامل صفحات اهمیت زیادی می‌دم.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        این وب‌سایت و پروژه‌هایی که در اون می‌بینی، بخشی از مسیر یادگیری و خلق منه؛ ترکیبی از منطق برنامه‌نویسی و ذوق طراحی.
                        هدفم اینه که هر روز یه چیز جدید یاد بگیرم، بهتر بسازم و تجربه‌ی کاربر رو لذت‌بخش‌تر کنم.
                    </p>
                </motion.div>

                {/* --- کارت‌های مهارت‌ها با Glow --- */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-card shadow-md transition-all duration-300 border-2 border-transparent hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                        >
                            <skill.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                            <h4 className="font-semibold">{skill.title}</h4>
                            <p className="text-sm text-muted-foreground">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

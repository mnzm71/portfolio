"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4" id="home">

            {/* دکمه تغییر تم */}
            <button
                onClick={toggleTheme}
                className="fixed top-4 left-4 z-[1000] bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
            >
                {theme === "light" ? "🌙 حالت شب" : "☀️ حالت روز"}
            </button>

            {/* پس‌زمینه */}
            <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${theme === "dark" ? "bg-gray-900" : "bg-sky-100"}`}>
                {theme === "dark" &&
                    Array.from({ length: 80 }).map((_, i) => {
                        const top = Math.random() * 100;
                        const left = Math.random() * 100;
                        const size = Math.random() * 2 + 1;
                        const opacity = Math.random() * 0.6 + 0.4;
                        const delay = Math.random() * 3;
                        return (
                            <div
                                key={i}
                                className="absolute bg-white rounded-full"
                                style={{
                                    top: `${top}%`,
                                    left: `${left}%`,
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    opacity,
                                    animation: `twinkle 3s infinite ease-in-out ${delay}s`,
                                }}
                            ></div>
                        );
                    })}
            </div>

            {/* بنر ثابت سمت چپ بالا (حالت تاریک: نور ماه) */}
            <div
                className={`hidden xl:block fixed top-24 left-4 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 
border-[conic-gradient(from_0deg,_#ffb300,_#ff005c,_#7a00ff,_#00ccff,_#00ff88,_#ffb300)] 
shadow-[0_0_50px_15px_rgba(255,255,255,0.4)] z-20 transition-colors duration-500 
${theme === "dark" ? "bg-gray-200/20 backdrop-blur-md" : "bg-transparent"}`}
            >
                <img
                    src="/icon.png"
                    alt="بنر ثابت"
                    className="w-full h-full object-cover"
                />
            </div>




            {/* کانتینر مرکزی: بنر وسط و متن */}
            <div className="relative flex flex-col items-center justify-center">

                {/* بنر وسط */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-[conic-gradient(from_0deg,_#ffb300,_#ff005c,_#7a00ff,_#00ccff,_#00ff88,_#ffb300)] shadow-[0_0_40px_10px_rgba(255,255,255,0.3)] mb-6">
                    <img src="/Untitled.png" alt="بنر دوم" className="w-full h-full object-cover" />
                </div>

                {/* متن اصلی */}
                <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-gray-800 dark:text-white drop-shadow-lg animate-[glowText_4s_ease-in-out_infinite] leading-snug text-center px-4">
                    نسخه آزمایشی طراحی سایت توسط
                    <span className="block mt-2 text-red-500 dark:text-red-400">
                        محمد نادی‌زاده میرزایی
                    </span>
                </h1>
            </div>

            <style jsx global>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                @keyframes glowText {
                    0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
                    50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.8); }
                }
            `}</style>
        </div>
    );
}

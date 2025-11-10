"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // آیکون‌های مدرن از lucide-react

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || "light";
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div
            id="home"
            className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 transition-colors duration-700"
        >
            {/* دکمه تغییر تم */}
            <button
                onClick={toggleTheme}
                className="fixed top-5 left-5 z-[9999] p-3 rounded-full 
             bg-white/70 dark:bg-gray-800/70 backdrop-blur-md 
             shadow-md hover:scale-110 hover:shadow-lg 
             transition-all duration-300"
            >
                {theme === "light" ? (
                    <Moon className="w-5 h-5 text-gray-900" />
                ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                )}
            </button>
            {/* پس‌زمینه */}
            <div
                className={`fixed inset-0 -z-10 transition-colors duration-700 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-br from-sky-100 to-white"
                    }`}
            >
                {theme === "dark" &&
                    Array.from({ length: 60 }).map((_, i) => {
                        const top = Math.random() * 100;
                        const left = Math.random() * 100;
                        const size = Math.random() * 2 + 1;
                        const opacity = Math.random() * 0.5 + 0.3;
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

            {/* بنر گوشه بالا */}
            <div
                className={`hidden xl:block fixed top-24 left-4 w-44 h-44 rounded-full overflow-hidden border-4 
          border-[conic-gradient(from_0deg,_#ffb300,_#ff005c,_#7a00ff,_#00ccff,_#00ff88,_#ffb300)]
          shadow-[0_0_40px_10px_rgba(255,255,255,0.3)] z-20 transition-all duration-700
          ${theme === "dark" ? "bg-gray-200/10 backdrop-blur-sm" : "bg-transparent"}`}
            >
                <img src="/icon.png" alt="لوگو" className="w-full h-full object-cover" />
            </div>

            {/* بخش مرکزی */}
            <div className="relative flex flex-col items-center justify-center text-center">
                {/* بنر مرکزی */}
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[conic-gradient(from_0deg,_#ffb300,_#ff005c,_#7a00ff,_#00ccff,_#00ff88,_#ffb300)] shadow-[0_0_30px_5px_rgba(255,255,255,0.2)] mb-6">
                    <img src="/Untitled.png" alt="بنر" className="w-full h-full object-cover" />
                </div>

                {/* متن */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white drop-shadow-lg animate-[glowText_4s_ease-in-out_infinite] leading-snug">
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
          0%, 100% { text-shadow: 0 0 8px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 25px rgba(255, 255, 255, 0.8); }
        }
      `}</style>
        </div>
    );
}

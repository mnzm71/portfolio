"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    // خواندن تم ذخیره‌شده
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
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center" id="home">
            {/* 🔘 دکمه تغییر تم */}
            <button
                onClick={toggleTheme}
                className="fixed top-4 left-4 z-[1000] bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
            >
                {theme === "light" ? "🌙 حالت شب" : "☀️ حالت روز"}
            </button>

            {/* 🌌 پس‌زمینه */}
            <div
                className={`fixed inset-0 -z-10 transition-colors duration-500 ${theme === "dark" ? "bg-gray-900" : "bg-sky-100"}`}
            >
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

            {/* 🖼️ بنر تصویر با حلقه رنگین‌کمانی کوچک‌تر */}
            <div className="relative mb-10 flex items-center justify-center">
                {/* حلقه رنگین‌کمانی کوچک‌تر و پالس */}
                <div className="absolute w-64 h-64 rounded-full border-4 border-transparent bg-[conic-gradient(from_0deg,_#ffb300,_#ff005c,_#7a00ff,_#00ccff,_#00ff88,_#ffb300)] blur-lg opacity-80 animate-[rotateRing_6s_linear_infinite,_pulseGlow_4s_ease-in-out_infinite]"></div>

                {/* قاب عکس کوچک‌تر */}
                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-[conic-gradient(from_0deg,_#ffb300,_#ff005c,_#7a00ff,_#00ccff,_#00ff88,_#ffb300)] shadow-[0_0_40px_10px_rgba(255,255,255,0.3)] relative z-10">
                    <img
                        src="/Untitled.png"
                        alt="طراح سایت"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* ✨ متن بنر */}
            <div className="text-center animate-[fadeIn_3s_ease-in-out]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white drop-shadow-lg animate-[glowText_4s_ease-in-out_infinite]">
                    طراحی این سایت توسط{" "}
                    <span className="text-yellow-300 dark:text-yellow-400">
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
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 30px rgba(255,255,255,0.8); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; filter: blur(15px); }
          50% { opacity: 1; filter: blur(25px); }
        }
      `}</style>
        </div>
    );
}

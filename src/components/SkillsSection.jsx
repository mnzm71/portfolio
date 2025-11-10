"use client";
import { useState } from "react";

const skillsData = {
    frontend: [
        { name: "HTML / CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 88 },
    ],
    backend: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQLite", level: 78 },
        { name: "Prisma ORM", level: 82 },
    ],
    windows: [
        { name: "C#", level: 88 },
        { name: "WPF", level: 80 },
        { name: ".NET Framework", level: 85 },
        { name: "SQL Server", level: 83 },
        { name: "Unity", level: 70 },
    ],
    tools: [
        { name: "Git / GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 85 },
    ],
};

const categoryNames = {
    frontend: "فرانت‌اند",
    backend: "بک‌اند",
    windows: "ویندوز",
    tools: "ابزارها",
};

export default function SkillsTabs() {
    const [category, setCategory] = useState("frontend");
    const categories = Object.keys(skillsData);
    const displayedSkills = skillsData[category];

    return (
        <section
            id="skille"
            dir="rtl"
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16 text-gray-900 dark:text-white transition-colors duration-700"
        >
            {/* عنوان */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 text-center">
                مهارت‌های من
            </h1>

            {/* تب‌های دسته‌بندی */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-8 sm:mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-5 sm:px-7 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg tracking-wide transition-all duration-300 
              ${category === cat
                                ? "bg-blue-600 text-white shadow-md shadow-blue-400/40 scale-105"
                                : "border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                            }`}
                    >
                        {categoryNames[cat]}
                    </button>
                ))}
            </div>

            {/* کارت مهارت‌ها */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-6xl justify-items-center">
                {displayedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-11/12 sm:w-full bg-white/5 dark:bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_0_10px_rgba(0,123,255,0.3)] hover:shadow-[0_0_25px_rgba(0,123,255,0.7)] transition-all duration-300 hover:scale-[1.03]"
                    >
                        <div className="flex justify-between items-center mb-2 sm:mb-4">
                            <span className="font-bold text-sm sm:text-lg">{skill.name}</span>
                            <span className="text-blue-400 font-bold text-xs sm:text-base">
                                {skill.level}٪
                            </span>
                        </div>

                        {/* نوار پیشرفت */}
                        <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-blue-300 h-2 sm:h-3 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

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

export default function SkillsTabs() {
    const [category, setCategory] = useState("frontend");
    const categories = ["frontend", "backend", "windows", "tools"];
    const displayedSkills = skillsData[category];

    const categoryNames = {
        frontend: "فرانت‌اند",
        backend: "بک‌اند",
        windows: "ویندوز",
        tools: "ابزارها",
    };

    return (
        <div
            className="min-h-screen text-black dark:text-white flex flex-col items-center px-3 sm:px-6 py-8 sm:py-16"
            id="skille"
            dir="rtl"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10">
                مهارت‌های من
            </h1>

            {/* دکمه‌های انتخاب مهارت */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 flex-row-reverse">
                {[...categories].reverse().map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-3 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 ${category === cat
                                ? "bg-blue-600 text-white shadow-lg scale-105"
                                : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800"
                            }`}
                    >
                        {categoryNames[cat]}
                    </button>
                ))}
            </div>

            {/* لیست مهارت‌ها */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8 w-full max-w-6xl text-right justify-items-center">
                {displayedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-11/12 sm:w-full rounded-xl sm:rounded-3xl p-3 sm:p-8 border border-white/10 shadow-[0_0_10px_rgba(0,123,255,0.3)] hover:shadow-[0_0_25px_rgba(0,123,255,0.7)] transition-all duration-300 hover:scale-105"
                    >
                        <div className="flex justify-between mb-1 sm:mb-3">
                            <span className="font-bold text-sm sm:text-xl">
                                {skill.name}
                            </span>
                            <span className="text-blue-400 font-bold text-xs sm:text-base">
                                {skill.level}٪
                            </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-4 overflow-hidden">
                            <div
                                className="bg-blue-500 h-1.5 sm:h-4 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

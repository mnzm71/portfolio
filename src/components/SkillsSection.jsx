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
    ],
    tools: [
        { name: "Git / GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 85 },
    ],
};

const allSkills = Object.values(skillsData).flat();

export default function SkillsTabs() {
    const [category, setCategory] = useState("all");
    const categories = ["all", ...Object.keys(skillsData)];
    const displayedSkills =
        category === "all" ? allSkills : skillsData[category];

    return (
        <div className="min-h-screen text-black dark:text-white flex flex-col items-center px-6 py-16" id="skille">
            <h1 className="text-4xl font-bold mb-10">My Skills</h1>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 " >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-6 py-2 rounded-full  text-lg font-semibold transition-all duration-300 ${category === cat
                            ? "bg-blue-600 text-white shadow-lg scale-105"
                            : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800"
                            }`}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
                {displayedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="rounded-3xl p-8 border border-white/10 shadow-[0_0_20px_rgba(0,123,255,0.5)] hover:shadow-[0_0_30px_rgba(0,123,255,0.8)] transition-all duration-300 hover:scale-105 "
                    >
                        <div className="flex justify-between mb-3">
                            <span className="font-bold text-xl">{skill.name}</span>
                            <span className="text-blue-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                            <div
                                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

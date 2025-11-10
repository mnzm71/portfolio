import { useState, useEffect } from "react";

export default function AdminPanel() {
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [comments, setComments] = useState([]);
    const apiUrl = "https://comments-worker.mnzm1371.workers.dev"; // URL Worker شما

    // ورود مدیر
    const handleLogin = () => {
        // نمونه رمز: admin123
        if (password === "admin123") {
            setIsLoggedIn(true);
            fetchComments();
        } else {
            alert("رمز اشتباه است!");
        }
    };

    // دریافت تمام نظرات (تایید شده و نشده)
    const fetchComments = async () => {
        try {
            const res = await fetch(`${apiUrl}/all-comments`);
            const data = await res.json();
            setComments(data);
        } catch (error) {
            console.error("خطا در دریافت نظرات:", error);
        }
    };

    // تایید نظر
    const approveComment = async (id) => {
        try {
            const res = await fetch(`${apiUrl}/approve/${id}`, { method: "POST" });
            if (res.ok) fetchComments();
        } catch (error) {
            console.error(error);
        }
    };

    // حذف نظر
    const deleteComment = async (id) => {
        try {
            const res = await fetch(`${apiUrl}/delete/${id}`, { method: "DELETE" });
            if (res.ok) fetchComments();
        } catch (error) {
            console.error(error);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
                <div className="bg-gray-700 p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl mb-4 text-center">ورود مدیر</h2>
                    <input
                        type="password"
                        placeholder="رمز ورود"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mb-4 rounded-lg text-black"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold"
                    >
                        ورود
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-6 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">پنل مدیریت نظرات</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
                {comments.length === 0 ? (
                    <p className="text-gray-400 text-center">هیچ نظری ثبت نشده است.</p>
                ) : (
                    comments.map((c) => (
                        <div
                            key={c.id}
                            className={`p-4 rounded-lg border ${c.status === "approved"
                                ? "border-green-500 bg-green-800/40"
                                : "border-yellow-500 bg-yellow-800/40"
                                }`}
                        >
                            <div className="flex justify-between mb-2 text-sm text-gray-300">
                                <span>{c.name}</span>
                                <span>{new Date(c.date).toLocaleDateString("fa-IR")}</span>
                            </div>
                            <p className="mb-2">{c.comment}</p>
                            {c.status !== "approved" && (
                                <button
                                    onClick={() => approveComment(c.id)}
                                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg mr-2"
                                >
                                    تایید
                                </button>
                            )}
                            <button
                                onClick={() => deleteComment(c.id)}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                            >
                                حذف
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

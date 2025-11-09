import { useState, useEffect } from "react";

export default function AdminPage() {
    const [pendingComments, setPendingComments] = useState([]);
    const apiUrl = "https://comments-worker.mnzm1371.workers.dev";

    const fetchPendingComments = async () => {
        try {
            const res = await fetch(`${apiUrl}/comments?status=pending`);
            const data = await res.json();
            setPendingComments(data);
        } catch (error) {
            console.error("خطا در دریافت نظرات pending:", error);
        }
    };

    const approveComment = async (id) => {
        try {
            const res = await fetch(`${apiUrl}/approve/${id}`, { method: "POST" });
            if (res.ok) {
                alert("نظر تایید شد ✅");
                fetchPendingComments();
            } else {
                alert("خطا در تایید نظر 😕");
            }
        } catch (error) {
            console.error("خطا در تایید نظر:", error);
        }
    };

    useEffect(() => {
        fetchPendingComments();
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-right" dir="rtl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">پنل مدیریت نظرات</h2>
            <div className="w-full max-w-4xl space-y-3">
                {pendingComments.length === 0 ? (
                    <p className="text-gray-400 text-center">نظری برای تایید وجود ندارد</p>
                ) : (
                    pendingComments.map((c) => (
                        <div key={c.id} className="border border-gray-700 rounded-lg p-4 bg-gray-700/60 text-gray-100 flex justify-between items-center">
                            <div>
                                <div className="flex justify-between mb-1 text-sm text-gray-400">
                                    <span>{c.name}</span>
                                    <span>{new Date(c.date).toLocaleDateString("fa-IR")}</span>
                                </div>
                                <p>{c.comment}</p>
                            </div>
                            <button onClick={() => approveComment(c.id)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                                تایید
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

"use client";
import { useState, useEffect } from "react";

export default function CommentsSection() {
  const [formData, setFormData] = useState({ name: "", comment: "" });
  const [comments, setComments] = useState([]); // نظرات approved
  const [pendingComments, setPendingComments] = useState([]); // نظرات pending برای مدیر
  const [isAdmin, setIsAdmin] = useState(false); // پنل مدیر
  const apiUrl = "https://comments-worker.mnzm1371.workers.dev"; // مسیر Worker دیپلوی شده

  // دریافت نظرات تایید شده
  const fetchComments = async () => {
    try {
      const res = await fetch(`${apiUrl}/comments`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error("خطا در دریافت نظرات:", error);
    }
  };

  // دریافت نظرات pending برای مدیر
  const fetchPendingComments = async () => {
    if (!isAdmin) return;
    try {
      const res = await fetch(`${apiUrl}/comments?status=pending`);
      const data = await res.json();
      setPendingComments(data);
    } catch (error) {
      console.error("خطا در دریافت نظرات pending:", error);
    }
  };

  useEffect(() => {
    fetchComments();
    fetchPendingComments();
  }, [isAdmin]);

  // ارسال نظر جدید
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    try {
      const res = await fetch(`${apiUrl}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("نظر شما ثبت شد و پس از تایید مدیر نمایش داده خواهد شد 🙌");
        setFormData({ name: "", comment: "" });
        fetchComments(); // بلافاصله لیست نظرات آپدیت شود
      } else {
        alert("خطا در ارسال نظر 😕");
      }
    } catch (error) {
      console.error("خطا در ارسال نظر:", error);
      alert("خطا در ارتباط با سرور");
    }
  };

  // تایید نظر توسط مدیر
  const approveComment = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/approve/${id}`, { method: "POST" });
      if (res.ok) {
        alert("نظر تایید شد ✅");
        fetchPendingComments();
        fetchComments();
      } else {
        alert("خطا در تایید نظر 😕");
      }
    } catch (error) {
      console.error("خطا در تایید نظر:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-right" dir="rtl">
      {/* بخش فرم ارسال نظر */}
      <div className="w-full max-w-4xl bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">نظرات کاربران</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
          <input
            type="text"
            name="name"
            placeholder="نام شما"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <textarea
            name="comment"
            placeholder="نظر شما..."
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className="border border-gray-600 rounded-lg px-4 py-3 h-32 resize-none bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition"
          >
            ارسال نظر
          </button>
        </form>

        {/* نمایش نظرات تایید شده */}
        <div className="space-y-5">
          {comments.length === 0 ? (
            <p className="text-gray-400 text-center">هنوز نظری ثبت نشده است.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="border border-gray-700 rounded-lg p-4 bg-gray-700/60 text-gray-100">
                <div className="flex justify-between mb-2 text-sm text-gray-400">
                  <span>{comment.name}</span>
                  <span>{new Date(comment.date).toLocaleDateString("fa-IR")}</span>
                </div>
                <p className="text-gray-200">{comment.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* پنل مدیر */}
      <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">پنل مدیر</h2>
        {!isAdmin ? (
          <button
            onClick={() => {
              const pass = prompt("پسورد مدیر:");
              if (pass === "admin123") setIsAdmin(true);
            }}
            className="bg-red-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-red-700 transition"
          >
            ورود به پنل مدیر
          </button>
        ) : (
          <>
            <h3 className="text-white mb-2">نظرات pending</h3>
            {pendingComments.length === 0 ? (
              <p className="text-gray-400">نظری برای تایید وجود ندارد</p>
            ) : (
              pendingComments.map((c) => (
                <div
                  key={c.id}
                  className="border border-gray-700 rounded-lg p-4 bg-gray-700/60 text-gray-100 mb-2 flex justify-between items-center"
                >
                  <div>
                    <div className="flex justify-between mb-1 text-sm text-gray-400">
                      <span>{c.name}</span>
                      <span>{new Date(c.date).toLocaleDateString("fa-IR")}</span>
                    </div>
                    <p>{c.comment}</p>
                  </div>
                  <button
                    onClick={() => approveComment(c.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    تایید
                  </button>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}

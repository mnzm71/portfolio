"use client";
import { useState } from "react";

export default function CommentsSection() {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    setComments([...comments, { ...formData, date: new Date().toLocaleDateString("fa-IR") }]);
    setFormData({ name: "", comment: "" });
    alert("نظر شما با موفقیت ثبت شد 🙌");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6 text-right"
      id="comments"
      dir="rtl"
    >
      <div className="w-full max-w-4xl bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          نظرات کاربران
        </h2>

        {/* فرم ارسال نظر */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
          <input
            type="text"
            name="name"
            placeholder="نام شما"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <textarea
            name="comment"
            placeholder="نظر شما..."
            value={formData.comment}
            onChange={handleChange}
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

        {/* لیست نظرات */}
        <div className="space-y-5">
          {comments.length === 0 ? (
            <p className="text-gray-400 text-center">هنوز نظری ثبت نشده است.</p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-4 bg-gray-700/60 text-gray-100"
              >
                <div className="flex justify-between mb-2 text-sm text-gray-400">
                  <span>{comment.name}</span>
                  <span>{comment.date}</span>
                </div>
                <p className="text-gray-200">{comment.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

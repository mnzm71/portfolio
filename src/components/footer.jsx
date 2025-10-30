// ContactUs.jsx
"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("پیام شما با موفقیت ارسال شد!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6 text-right"
      id="contact"
      dir="rtl"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298, #000000)",
      }}
    >
      {/* باکس فرم و اطلاعات تماس */}
      <div className="w-full max-w-6xl shadow-xl rounded-xl p-10 md:flex md:gap-10 bg-gray-800/80 backdrop-blur-md">
        {/* بخش اطلاعات تماس */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-gray-200">
          <h2 className="text-4xl font-bold mb-4">تماس با ما</h2>
          <p className="mb-6 text-gray-300">
            هر سوال یا پیشنهادی دارید، خوشحال می‌شویم از شما بشنویم.
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold">ایمیل</h3>
              <p className="text-gray-400">contact@domain.com</p>
            </div>
            <div>
              <h3 className="font-semibold">تلفن</h3>
              <p className="text-gray-400">+98 912 345 6789</p>
            </div>
            <div>
              <h3 className="font-semibold">آدرس</h3>
              <p className="text-gray-400">تهران، ایران</p>
            </div>
          </div>
        </div>

        {/* فرم تماس */}
        <form className="md:w-1/2 flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="نام شما"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل شما"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg px-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
            required
          />
          <textarea
            name="message"
            placeholder="پیام شما"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-600 rounded-lg px-4 py-3 h-40 resize-none bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
}

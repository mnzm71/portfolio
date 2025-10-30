import { Coffee, Guitar } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300 animate-fadeIn px-4 text-center">
            {/* تصویر کارتونی با آیکون */}
            <div className="relative mb-8">
                <Coffee className="w-24 h-24 text-yellow-500 animate-bounce inline-block" />
                <Guitar className="w-24 h-24 text-blue-500 absolute top-0 left-16 animate-spin-slow" />
            </div>

            {/* عدد 404 */}
            <h1 className="text-7xl font-extrabold text-red-500 mb-4">404</h1>

            {/* توضیح */}
            <p className="text-xl text-gray-700 mb-6 max-w-md mx-auto">
                صفحه‌ای که دنبال آن بودید پیدا نشد! احتمالا آدرس رو اشتباه وارد کرده‌اید.
            </p>

            {/* دکمه برگشت به خانه */}
            <a
                href="/"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
            >
                بازگشت به خانه
            </a>
        </div>
    );
}

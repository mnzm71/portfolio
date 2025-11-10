export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const db = env.comments_db;

		// پاسخ به preflight requests برای CORS
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
				},
			});
		}

		// گرفتن تمام نظرات (تایید شده و نشده) برای پنل مدیریت
		if (url.pathname === "/all-comments") {
			const result = await db.prepare("SELECT * FROM comments ORDER BY date DESC").all();
			return new Response(JSON.stringify(result.results), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		// گرفتن نظرات عمومی (فقط تایید شده)
		if (url.pathname === "/comments") {
			const result = await db.prepare("SELECT * FROM comments WHERE status = 'approved' ORDER BY date DESC").all();
			return new Response(JSON.stringify(result.results), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		// اضافه کردن نظر جدید
		if (url.pathname === "/add" && request.method === "POST") {
			const data = await request.json();
			const date = new Date().toISOString();

			await db.prepare("INSERT INTO comments (name, comment, status, date) VALUES (?, ?, 'pending', ?)")
				.bind(data.name, data.comment, date)
				.run();

			return new Response(JSON.stringify({ message: "نظر ثبت شد و در انتظار تایید مدیر است" }), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		// تایید نظر توسط مدیر
		if (url.pathname.startsWith("/approve/") && request.method === "POST") {
			const id = url.pathname.split("/")[2];
			await db.prepare("UPDATE comments SET status = 'approved' WHERE id = ?").bind(id).run();

			return new Response(JSON.stringify({ message: "نظر تایید شد" }), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		// حذف نظر توسط مدیر
		if (url.pathname.startsWith("/delete/") && request.method === "DELETE") {
			const id = url.pathname.split("/")[2];
			await db.prepare("DELETE FROM comments WHERE id = ?").bind(id).run();

			return new Response(JSON.stringify({ message: "نظر حذف شد" }), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		// مسیر پیش‌فرض
		return new Response("Not Found", { status: 404 });
	},
};

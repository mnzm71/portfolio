export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// مسیر /add برای اضافه کردن نظر
		if (url.pathname === "/add" && request.method === "POST") {
			const data = await request.json();
			const id = crypto.randomUUID();
			const date = new Date().toISOString();

			// ذخیره نظر با status pending
			await env.comments_db.prepare(`
        INSERT INTO comments (id, name, comment, status, date)
        VALUES (?, ?, ?, ?, ?)
      `).bind(id, data.name, data.comment, "pending", date).run();

			return new Response(JSON.stringify({ success: true }), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type"
				}
			});
		}

		// مسیر /comments برای دریافت نظرات approved
		if (url.pathname === "/comments" && request.method === "GET") {
			const status = url.searchParams.get("status") || "approved";

			const rows = await env.comments_db.prepare(`
        SELECT * FROM comments WHERE status = ?
        ORDER BY date DESC
      `).bind(status).all();

			return new Response(JSON.stringify(rows.results), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type"
				}
			});
		}

		// مسیر /approve/:id برای تایید نظر
		if (url.pathname.startsWith("/approve/") && request.method === "POST") {
			const id = url.pathname.split("/approve/")[1];
			await env.comments_db.prepare(`
        UPDATE comments SET status = 'approved' WHERE id = ?
      `).bind(id).run();

			return new Response(JSON.stringify({ success: true }), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type"
				}
			});
		}

		// OPTIONS برای CORS preflight
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type"
				}
			});
		}

		return new Response("Not Found", { status: 404 });
	}
};

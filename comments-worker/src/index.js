export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// مسیرها
		if (url.pathname.startsWith("/comments")) {
			const comments = await env.comments_db.prepare("SELECT * FROM comments WHERE status='approved'").all();
			return new Response(JSON.stringify(comments.results), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*", // <--- مهم
					"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
				},
			});
		}

		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
				},
			});
		}

		// مسیر add و approve هم همینطور
	}
};

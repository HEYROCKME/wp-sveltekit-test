export const get = async () => {
	const res = await fetch('http://127.0.0.1/wordpress/wp-json/wp/v2/posts');

	const posts = await res.json();

	return {
		status: 200,
		body: posts
	};
};

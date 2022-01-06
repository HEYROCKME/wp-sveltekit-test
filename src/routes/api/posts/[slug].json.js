import { BASE_URL, POSTS_API } from '$lib/variables';

export const get = async (request) => {
	const slug = request.params.slug;
	const res = await fetch(`${BASE_URL}${POSTS_API}?slug=${slug}&_embed`);

	const posts = await res.json();
	const post = posts[0];
	// let date = new Date(post.date);
	post.featureImage = post._embedded['wp:featuredmedia'][0];
	post.author = post._embedded.author[0].name;
	// post.dateFormat = date;
	return {
		status: 200,
		body: post
	};
};

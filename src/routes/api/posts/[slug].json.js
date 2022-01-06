import { BASE_URL, POSTS_API } from '$lib/variables';

export const get = async (request) => {
	const slug = request.params.slug;
	const res = await fetch(`${BASE_URL}${POSTS_API}?slug=${slug}&_embed`);

	const posts = await res.json();
	const post = posts[0];
	post.featureImage = post._embedded['wp:featuredmedia'][0];

	return {
		status: 200,
		body: post
	};
};

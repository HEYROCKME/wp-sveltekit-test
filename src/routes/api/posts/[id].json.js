import { BASE_URL, POSTS_API } from '$lib/variables';

export const get = async (request) => {
	const id = request.params.id;
	const res = await fetch(`${BASE_URL}${POSTS_API}${id}?_embed`);

	const post = await res.json();
	post.featureImage = post._embedded['wp:featuredmedia'][0];

	return {
		status: 200,
		body: post
	};
};

import { BASE_URL, POSTS_API } from '$lib/variables';

export const get = async () => {
	const res = await fetch(`${BASE_URL}${POSTS_API}?_embed`);

	const posts = await res.json();
	// console.log(posts);

	posts.map((post) => {
		if (post._embedded['wp:featuredmedia'][0]) {
			post.featureImage = post._embedded['wp:featuredmedia'][0];
		}
	});

	return {
		status: 200,
		body: posts
	};
};

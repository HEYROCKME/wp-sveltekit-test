import { BASE_URL, POSTS_API } from '$lib/variables';

export const get = async () => {
	const res = await fetch(`${BASE_URL}${POSTS_API}`);

	const posts = await res.json();

	return {
		status: 200,
		body: posts
	};
};

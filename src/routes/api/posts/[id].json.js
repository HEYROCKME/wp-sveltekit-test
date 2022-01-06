import { BASE_URL, POSTS_API } from '$lib/variables';

export const get = async (request) => {
	const id = request.params.id;
	const res = await fetch(`${BASE_URL}${POSTS_API}${id}`);

	const post = await res.json();

	return {
		status: 200,
		body: post
	};
};

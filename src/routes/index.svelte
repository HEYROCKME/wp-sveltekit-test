<script context="module">
	//testing post
	export const load = async ({ fetch }) => {
		const res = await fetch('http://127.0.0.1/wordpress/wp-json/wp/v2/posts');
		const posts = await res.json();
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<h1>Blog</h1>
{#each posts as post}
	<h2>{@html post.title.rendered}</h2>
	<p>{@html post.excerpt.rendered}</p>
	<a href="">Read More</a>
{/each}

<!-- {JSON.stringify(posts)} -->

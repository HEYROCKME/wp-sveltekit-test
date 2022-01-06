<script context="module">
	//testing post
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json'); //Fetch posts from Api/
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
	<img
		class="list-feature-image"
		alt={post.featureImage.alt_text}
		src={post.featureImage.source_url}
	/>
	<h2>{@html post.title.rendered}</h2>
	<p>{@html post.excerpt.rendered}</p>
	<a href={`/posts/${post.slug}`}>Read More</a>
{/each}

<!-- {JSON.stringify(posts)} -->
<style>
	.list-feature-image {
		width: 100%;
	}
</style>

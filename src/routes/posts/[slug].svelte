<script context="module">
	export const load = async ({ url, params, fetch }) => {
		const slug = params.slug;

		const res = await fetch(`/api/posts/${slug}.json`); //Fetch posts from Api/
		const post = await res.json();
		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	export let post;
</script>

<!-- {JSON.stringify(post._embedded['wp:featuredmedia'][0].source_url)} -->
<h1>{@html post.title.rendered}</h1>
{#if post.featureImage}
	<img
		class="post-feature-img"
		alt={post.featureImage.alt_text}
		src={post.featureImage.source_url}
	/>
{/if}

<p>{@html post.content.rendered}</p>

<style>
	.post-feature-img {
		width: 100%;
	}
</style>

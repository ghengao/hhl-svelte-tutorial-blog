import type { Post } from '$lib/types';

export async function load({ fetch }) {
    console.log("in page")
	const resp = await fetch('api/posts');
	const posts: Post[] = await resp.json();
	return {
		posts
	};
}

import type { Post } from '$lib/types';
import { json } from '@sveltejs/kit';
export const prerender = true;

// This function is called every time the api endpoint is called.
// ? Is there a better way to cache the posts? Cos after all they are static
async function getPosts(): Promise<Post[]> {
	let posts: Post[] = [];
	// What is the type here?
	const paths = import.meta.glob('/src/contents/*/*.md', { eager: true });
	for (const path in paths) {
		const file = paths[path];
		// Get the slug from the path which is the last part of the path stripping the suffix
		const slug = path.split('/').pop()?.replace('.md', '');
		if (
			file &&
			typeof file === 'object' &&
			'metadata' in file &&
			typeof file.metadata === 'object' &&
			slug
		) {
			const metadata = file.metadata;
			const post = { ...metadata, slug };
			// Only add the post if it is published
			post.published && posts.push(post);
		}
	}
	posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return posts;
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = await getPosts();
	return json(posts);
}

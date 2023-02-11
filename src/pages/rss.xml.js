import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
	return rss({
		title: 'Astroチュートリアル',
		description: 'My journey learning Astro',
		site: 'https://tris5572.github.io/astro_tutorial/',
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>ja-jp</language>`,
	});
}

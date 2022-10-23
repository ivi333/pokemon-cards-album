import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: () => ({
      server: {
        watch: {
          usePolling: true,
        }
      }
    }),
    prerender: {
      default: true
    },
	}
};

export default config;

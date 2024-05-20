import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		siteTitle: 'commute Manager v1'
	}
});

export default app;
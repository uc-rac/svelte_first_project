import App from './App.svelte';
import scoreBoard from './scoreBoard.svelte'
const app = new scoreBoard({
	target: document.body
});

export default app;
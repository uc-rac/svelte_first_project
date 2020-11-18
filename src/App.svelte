
<script>
import Learn from './learn.svelte'
	let name = 'RG';
	const togglename = () => {
		name = "Rachit Gupta";
	}
</script>

<style>
	.myblock{
		margin: auto;
		text-align: center;
		color: brown;
		font-family: 'Courier New', Courier, monospace;
	}
	button{
		background-color: brown;
		color: white;
		cursor: pointer;
	}
</style>

<div class="myblock">
	<h1>Hello {name}!</h1>
	<p>welcom to svelte family..!</p>
	<button on:click={togglename}>Toggle Full Name</button>
	<Learn/>

</div>



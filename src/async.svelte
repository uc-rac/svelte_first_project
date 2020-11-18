<script>
	async function getRandomNumber() {
		const res = await fetch(`https://svelte.dev/tutorial/random-number`);
        const text = await res.text();
        console.log(res)

		if (res.ok) {
            return text;
		} else {
			throw new Error(text);
		}
	}
	
	let promise;
	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	click to generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

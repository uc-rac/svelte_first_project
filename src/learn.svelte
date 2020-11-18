<script>
	let animals = [
		{ id: '1', name: 'Cat' },
		{ id: '2', name: 'Dogs' },
		{ id: '3', name: 'Monkey' }
    ];

    let yes = true;

import Async from './async.svelte'
</script>

<h1 class="mt-5">The Famous Animal of YouTube</h1>

<ul>
	{#each animals as animal, i}
		<li><a target="_blank" href="https://ucertify.com">
			{i + 1}: {animal.name}
		</a></li>
	{/each}
</ul>
<label>
	<input type="checkbox" bind:checked={yes}>
	Yes! Send me regular email spam
</label>

<Async/>

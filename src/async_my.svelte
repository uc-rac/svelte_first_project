<script>
    async function fetchnumber(){
        const res = await fetch('https://svelte.dev/tutorial/random-number');
        const text = await res.text;

        if(res.ok)
            return text;
        else
            throw new Error(text);
    }   
</script>

<button on:click={fetchnumber}>Click to fetch number</button>
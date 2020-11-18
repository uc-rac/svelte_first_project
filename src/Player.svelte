<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let points;
    let showControls = false;
    export let name;

    const addPoints = () =>{
        points += 1;
    }

    const removePoints = () => {
        points -= 1;
    }

    const toggleControls = () => {
        showControls = !showControls;
    }

    const removePlayer = (e) => {
        const player = {
            name: name,
            points: points
        }
        e.preventDefault();
        dispatch('removePlayer' , player);
    }
</script>

    <div class="col-sm-3">
        <div class="card p-4 shadow-sm border rounded text-center mt-2">
            <h1 class="font-weight-bold font24">{name}
                <button class="btn btn-sm btn-light" on:click={toggleControls}>
                    {#if showControls} - {:else} + {/if}
                </button>
                <button class="btn btn-sm btn-danger position-absolute top0 right0" on:click={removePlayer}>X</button>
            </h1>
            <h5>points: {points}</h5>
            {#if showControls}
                <div class="col-md-12 text-center mb-2">
                    <button type="button" class="btn btn-primary" on:click={addPoints}>+1</button>
                    <button type="button" class="btn btn-danger" on:click={removePoints}>-1</button>
                </div>
                <input class="form form-control" type="number" bind:value={points}>
            {/if}
            
        </div>
    </div>

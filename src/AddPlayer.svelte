<script>
import { prevent_default } from "svelte/internal";


    import Player from "./Player.svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let player = {
            name : "",
            points: 0
        } 

    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch('playerdata' , player);
        player = {
            name : "",
            points: 0
        } 
    }
</script>

<form on:submit={onSubmit}>
    <input type="text" class="form form-control mt-2" placeholder="Player Name" bind:value={player.name} required>
    <input type="number" class="form form-control mt-2" bind:value={player.points} required>
    <input type="submit" class="btn btn-primary mt-2" value="add Player"/>
</form>
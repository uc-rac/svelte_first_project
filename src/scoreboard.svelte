<script>
    import Navbar from './navbar.svelte';
    import Player from './Player.svelte';
    import Addplayer from './AddPlayer.svelte';

    let players = [
        {
            name: "Rachit Gupta",
            points: 176
        },
        {
            name: "Rohit Gupta",
            points: 144
        },
        {
            name: "Akash Gupta",
            points: 167
        }
    ]

    const playerData = (event) =>{
        const data = event.detail;
        players = [...players , data];
    }

    const removeplayer = (event) => {
        const data =  event.detail;
        let updateplayers = players.filter((arr) => {
            console.log(name)
            return arr.name != data.name;
        })
        console.log(updateplayers)
        players = [...updateplayers];
    }
</script>

<Navbar/>

<div class="container mt-4">
<Addplayer on:playerdata = {playerData}/>
    <div class="row">
        {#if players.length === 0}
            <div class="alert alert-danger mt-4 fwidth ml-3"> No player found</div>
        {:else}
            {#each players as player}
            <Player name={player.name} points={player.points} on:removePlayer={removeplayer}/>      
            {/each}
        {/if}
    </div>
</div>
<script>
    import { startGameLoop } from "../GameLoop";
    import { onMount } from "svelte";
    import { loadGame } from "../SaveLoad";
    import SaveMenu from "../components/SaveMenu.svelte";
    import CoinGame from "../components/CoinGame.svelte";
    
    onMount(() => {
        loadGame();
        startGameLoop();
    });
</script>

<h1>Svelte Incremental Engine</h1>
<CoinGame/>
<SaveMenu/>




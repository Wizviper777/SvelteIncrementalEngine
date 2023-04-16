<script>
    import { saveGame, loadGame, resetGame } from "../SaveLoad";
</script>

<button on:click={saveGame}>Save</button>
<button on:click={loadGame}>Load</button>
<button on:click={resetGame}>Reset</button>
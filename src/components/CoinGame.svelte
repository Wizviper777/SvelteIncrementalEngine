<script>
    import { store } from "../Game";
    import { coinGame } from "../CoinGame";
    import { format } from "../Utils";

    $: coins = $store.coinGame.data.coins;
    $: upgradeCost = $store.coinGame.data.upgradeCost;
    $: clickPower = $store.coinGame.data.clickPower;
    $: buildingCount = $store.coinGame.data.buildingCount;
    $: buildingCost = $store.coinGame.data.buildingCost;
    $: income = $store.coinGame.coinsPerSecond();
</script>


<p>You have {format(coins)} coins.</p>
<p>Your click power is {clickPower}.</p>
<p>You have {buildingCount} buildings producing {income} coins per second.</p>
<button on:click={() => coinGame.clickCoin()}>Click Coin</button>
<button on:click={() => coinGame.buyUpgrade()}>Buy Upgrade(Costs {upgradeCost})</button>
<button on:click={() => coinGame.buyBuilding()}>Buy Building(Costs {buildingCost})</button>
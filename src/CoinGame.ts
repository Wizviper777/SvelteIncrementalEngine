import { Feature } from "./Feature";
import { spend, canAfford } from "./Utils";

export class CoinGame extends Feature {
    saveKey: string = "coinGame";
    data: CoinGameData = new CoinGameData();

    update(deltaT: number) {
        this.data.coins += this.coinsPerSecond() * deltaT;
    }

    reset() {
        this.data = new CoinGameData();
    }

    clickCoin() {
        this.data.coins += this.data.clickPower;
    }

    buyUpgrade() {
        if (canAfford(this.data.coins, 10)) {
            this.data.coins = spend(this.data.coins, 10);
            this.data.clickPower += 1;
        }
    }

    buyBuilding() {
        if (canAfford(this.data.coins, this.data.buildingCost)) {
            this.data.coins = spend(this.data.coins, this.data.buildingCost);
            this.data.buildingCount++;
            this.data.buildingCost = Math.round(this.data.buildingCost * 1.1);
        }
    }

    coinsPerSecond() {
        return this.data.buildingCount;
    }
}

class CoinGameData {
    coins: number = 0;
    clickPower: number = 1;
    upgradeCost: number = 10;
    buildingCount: number = 0;
    buildingCost: number = 25;
}

export let coinGame = new CoinGame();


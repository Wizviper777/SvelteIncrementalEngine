import { writable } from "svelte/store";
import { coinGame } from "./CoinGame";
import {settings} from "./Settings";
import type { Feature } from "./Feature";

export class Game {
    features: Feature[] = [
        coinGame,
        settings,
    ];
    coinGame = coinGame;
    settings = settings;
}

export let game = new Game();
export let store = writable(game);

export function updateGame(deltaT: number) {
    for(let feature of game.features) {
        feature.update(deltaT);
    }
    updateStore();
}

export function updateStore() {
    store.set(game);
}

export function resetState() {
    for(let feature of game.features) {
        feature.reset();
    }
    store.set(game);
}
import { game, resetState } from "./Game";

export function saveGame() {
    for(let feature of game.features) {
        const key = feature.saveKey;
        const data = feature.data;
        if(data && key) {
            //console.log("Saving " + key + ": " + JSON.stringify(data));
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
}

export function loadGame() {
    for(let feature of game.features) {
        const key = feature.saveKey;
        const data = localStorage.getItem(key);
        if(data && key) {
            feature.data = JSON.parse(data);
            //console.log("Loaded " + key + ": " + JSON.stringify(data));
        }
    }
}

export function resetGame() {
    localStorage.clear();
    resetState();
}
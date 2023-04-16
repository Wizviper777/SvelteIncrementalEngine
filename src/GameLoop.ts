import { updateGame } from "./Game";

let lastUpdate = Date.now();

export function startGameLoop() {
    window.requestAnimationFrame(gameLoop);
}

function gameLoop() {
    const now = Date.now();
    const deltaT = (now - lastUpdate) / 1000; //Convert to seconds
    lastUpdate = now;

    updateGame(deltaT);

    requestAnimationFrame(gameLoop);
}
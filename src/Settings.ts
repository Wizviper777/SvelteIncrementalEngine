import { Feature } from "./Feature";
import { saveGame } from "./SaveLoad";

export class Settings extends Feature {
    saveKey: string = "settings";
    data: SettingsData = new SettingsData();

    reset() {
        this.data = new SettingsData();
    }

    update(deltaT: number) {
        if(this.data.autosaveEnabled) {
            this.data.autosaveLast += deltaT;
            if(this.data.autosaveLast > this.data.autosaveInterval) {
                this.data.autosaveLast = 0;
                saveGame();
            }
        }
    }
}

export class SettingsData {
    autosaveEnabled: boolean = true;
    autosaveInterval: number = 60;
    autosaveLast: number = 0;
}

export let settings = new Settings();
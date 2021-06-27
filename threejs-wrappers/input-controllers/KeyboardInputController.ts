/**
* Ignores case of inputed letters, e.g "W === "w" 
*/
export class KeyboardInputController {
    activeKeys: Array<string>;

    constructor() {
        this.activeKeys = [];

        document.addEventListener('keydown', (e) => this.onKeyDown(e.key.toLowerCase()), false);
        document.addEventListener('keyup', (e) => this.onKeyUp(e.key.toLowerCase()), false);
    }

    includes(key: string) {
        return this.activeKeys.includes(key.toLowerCase());
    }

    onKeyDown(key: string) {
        if (!this.activeKeys.includes(key)) {
            this.activeKeys.push(key);
        }
    }

    onKeyUp(key: string) {
        if (this.activeKeys.includes(key)) {
            this.activeKeys.splice(this.activeKeys.indexOf(key), 1);
        }
    }
}

import {Component} from '@angular/core';
import {words} from './words';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent {
    word = '';
    hiddenWord = '';
    tries = 0;
    win = false;
    lost = false;
    letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ];

    constructor() {
        var randomNumber = Math.floor(Math.random() * words.length);
        this.word = words[randomNumber];
        this.hiddenWord = '_ '.repeat(this.word.length);
    }

    check(letter: string) {
        if ((<HTMLInputElement> document.getElementById('btn-' + letter)) === null) {
            return true;
        }
        if ((<HTMLInputElement> document.getElementById('btn-' + letter)).disabled === true) {
            return true;
        }
        (<HTMLInputElement> document.getElementById('btn-' + letter)).disabled = true;
        if (this.word.indexOf(letter) === -1) {
            this.tries++;
        }
        const hiddenWordArray = this.hiddenWord.split(' ');
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
                hiddenWordArray[i] = letter;
            }
        }
        this.hiddenWord = hiddenWordArray.join(' ');
        this.checkGame();
    }

    checkGame() {
        const wordArray = this.hiddenWord.split(' ');
        const wordCheck = wordArray.join('');
        if (wordCheck === this.word) {
            this.win = true;
            this.playYouWinSound();
        }
        if (this.tries >= 9) {
            this.lost = true;
            this.playYouLoseSound();
        }
    }

    reload() {
        location.reload();
    }

    onKey(event: KeyboardEvent) {
        this.check(event.key.toUpperCase());
    }

    playYouWinSound() {
        let audio = new Audio();
        audio.src = "../../assets/sounds/youwin.mp3";
        audio.load();
        audio.play();
    }

    playYouLoseSound() {
        let audio = new Audio();
        audio.src = "../../assets/sounds/youlose.mp3";
        audio.load();
        audio.play();
    }
}

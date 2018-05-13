import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    word = '';
    hiddenWord = '';
    tries = 0;
    win = false;
    lost = false;

    letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ];

    words = [
        'JUEGO',
        'SALAME',
        'VENTILADOR',
        'CALEFACTOR',
        'CUNA',
        'SIMPATIA',
        'PESADO',
        'JOROBADO',
        'COMILLAS',
        'PILA',
        'AZOTEA',
        'BURBUJA',
        'SORTEO',
        'TRUCO',
        'ANTIBIOTICO',
        'REVOLUCIONARIO',
        'OLER',
        'ASEGURAR',
        'REBELDE',
        'AVANZADO',
        'ANUNCIO',
        'MENTIRA',
        'MARIPOSA',
        'LEER',
        'REALIZAR',
        'FRONTERA',
        'PURO',
        'TECHO',
        'DULCE',
        'VENDAJE',
        'HIELO',
        'COMPONER',
    ];

    constructor() {
        var randomNumber = Math.floor(Math.random() * this.words.length);
        this.word = this.words[randomNumber];
        this.hiddenWord = '_ '.repeat(this.word.length);
    }

    check(letter) {
        (<HTMLInputElement> document.getElementById('btn-'+letter)).disabled = true;
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
        }
        if (this.tries >= 9) {
            this.lost = true;
        }
    }
}

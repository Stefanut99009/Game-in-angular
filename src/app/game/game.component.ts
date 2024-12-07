import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Import ReactiveFormsModule
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  secretNumber: number = Math.floor(Math.random() * 100) + 1;
  feedback: string = '';
  attempts: number = 0;

  // Create a new FormControl for the guess
  guessControl = new FormControl(null);

  checkGuess() {
    const guess = this.guessControl.value;
    if (guess == null) return;

    this.attempts++;
    if (guess > this.secretNumber) {
      this.feedback = 'Too high! Try again.';
    } else if (guess < this.secretNumber) {
      this.feedback = 'Too low! Try again.';
    } else {
      this.feedback = `Correct! You guessed the number in ${this.attempts} attempts.`;
    }
  }

  resetGame() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.guessControl.setValue(null);  // Reset the form control value
    this.feedback = '';
    this.attempts = 0;
  }
}

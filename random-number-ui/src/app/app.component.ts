import { Component } from '@angular/core';
import { RandomNGService } from './services/random-n-g.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'random-number-generator';
  constructor(private __randomNGService: RandomNGService) {

  }

  randomNumber = 0;

  generateRandomNumber() {
    const observer: Observable<number> = this.__randomNGService.getRandomNumber();

    observer.subscribe({
      next: (number: number) => {
        this.randomNumber = number;
        console.log('Random number:', this.randomNumber);
      },
      error: (error: any) => {
        console.error('Failed to generate random number:', error);
      }
    });
  }
}

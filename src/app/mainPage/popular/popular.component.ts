import { Component } from '@angular/core';
import { PopularSService } from '../../services/popular-s.service';
import { PopularEvents } from '../../interfaces/popular.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})

export class PopularComponent {
  popularCards!: PopularEvents[];

  constructor(private _popularService: PopularSService) {
    this._popularService.getPopular().subscribe((data : any) => {
      this.popularCards = data;
      console.log(this.popularCards);
      
    })
  }




          //!!!!!!!!!!!!! carousel
  currentIndex = 0;

  nextCard() {
    if (this.currentIndex < this.popularCards.length - 4) {
      this.currentIndex++;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

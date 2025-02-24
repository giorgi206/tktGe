import { Component } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';
import { Banner } from '../../interfaces/bannerCarousel.model';

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.css']
})
export class CarouselContainerComponent {
  banners!: Banner[];
  constructor(private _carousel:CarouselService){
    this.getCarouselInfo()
  }
  getCarouselInfo() {
    this._carousel.getCarousel().subscribe((data: any) => {
        if (data && data.banners) {
          this.banners = data.banners;
          console.log('Banners:', this.banners);
        } else {
          console.warn('No banners found in response');
        }
      },
      (error) => {
        console.error('Error fetching carousel data:', error);
      }
    );
  }
}

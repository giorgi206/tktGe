import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner, Carousel } from '../interfaces/bannerCarousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private _http:HttpClient) { }

  carouselApi: string = "http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Shows/Pinned?api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77";
  getCarousel(){
    return this._http.get<Carousel>(this.carouselApi);
  }

}

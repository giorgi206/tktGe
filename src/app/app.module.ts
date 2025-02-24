import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './allComponents/nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CarouselContainerComponent } from './mainPage/carousel-container/carousel-container.component';
import { HomePageComponent } from './mainPage/home-page/home-page.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { rgbToHsv, rgbToHex, inputToRGB } from '@ctrl/tinycolor'
registerLocaleData(en);




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselContainerComponent,
    HomePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NzCarouselModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeNavbarComponent,
    HomeCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }

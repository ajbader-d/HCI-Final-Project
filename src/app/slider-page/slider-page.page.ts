import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.page.html',
  styleUrls: ['./slider-page.page.scss'],
})
export class SliderPagePage implements OnInit {

  @ViewChild('slider') slider: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    // autoplay:true
  };

  constructor() { }

  slidesDidLoad(slider: IonSlides) {
    // slider.startAutoplay();
    // let prom2 = this.slider.isEnd();
    // console.log(prom2)
  }

  public next(){
    this.slider.slideNext();
 }

  ngOnInit() {
  }

}

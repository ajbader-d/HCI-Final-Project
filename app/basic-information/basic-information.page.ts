import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicService } from './basic.service';
import { Basic } from './basic.model';
import { City } from '../cities/city.model';
import { CitiesServiceService } from '../cities/cities-service.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.page.html',
  styleUrls: ['./basic-information.page.scss'],
})
export class BasicInformationPage implements OnInit {
  basic: Basic[];
  loadedCity: City;

  constructor(
    private basicService: BasicService,
    private activatedRoute: ActivatedRoute,
    private cityService: CitiesServiceService) { }

  ngOnInit() {
    this.basic = this.basicService.getAllBasics();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('basicInformation')) {
        return;
      }
      const basicId = paramMap.get('basicInformation');
      this.loadedCity = this.cityService.getBasicInfo(basicId);
    });
  }

}

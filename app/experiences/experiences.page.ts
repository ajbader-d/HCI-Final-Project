import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from '../cities/city.model';
import { CitiesServiceService } from '../cities/cities-service.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {
  loadedCity: City;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CitiesServiceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('experiencesId')) {
        return;
      }
      const experienceId = paramMap.get('experiencesId');
      this.loadedCity = this.cityService.getExperience(experienceId);
    });
  }

}

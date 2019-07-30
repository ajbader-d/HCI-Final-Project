import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { City } from '../../cities/city.model';
import { ExpDetail } from '../exp-model';
import { CitiesServiceService } from '../../cities/cities-service.service';
import { ExpServiceService } from '../exp-service.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.page.html',
  styleUrls: ['./experience-detail.page.scss'],
})
export class ExperienceDetailPage implements OnInit {
  // category: CustomEvent<SegmentChangeEventDetail>;
  category: string;
  loadedCity: City;
  loadedExp: ExpDetail;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private cityService: CitiesServiceService,
    private experService: ExpServiceService,
    ) {
    this.category = 'about';
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('experiencesId')) {
        return;
      }
      const experienceId = paramMap.get('experiencesId');
      this.loadedCity = this.cityService.getExperience(experienceId);
    });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('expDetail')) {
        return;
      }
      const expId = paramMap.get('expDetail');
      this.loadedExp = this.experService.getExpDetail(expId);
    });
  }

  // segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
  //   console.log(event);
  //   this.category = event;
  // }

  myBackButton() {
    this.location.back();
  }
  segmentChanged(event: any) {
    this.category = event;
  }

}

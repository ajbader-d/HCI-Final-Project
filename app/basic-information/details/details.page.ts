import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicService } from '../basic.service';
import { Basic } from '../basic.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  loadedBasic: Basic;

  constructor(
    private activatedRoute: ActivatedRoute,
    private basicService: BasicService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('basicInfoId')) {
        return;
      }
      const basicId = paramMap.get('basicInfoId');
      this.loadedBasic = this.basicService.getBasic(basicId);
    });
  }

}

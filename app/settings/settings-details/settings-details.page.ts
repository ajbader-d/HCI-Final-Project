import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Setting } from '../settings.model';
import { SettingsServicesService } from '../settings-services.service';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';


@Component({
  selector: 'app-settings-details',
  templateUrl: './settings-details.page.html',
  styleUrls: ['./settings-details.page.scss'],
})
export class SettingsDetailsPage implements OnInit {
  loadedSetting: Setting;
  constructor(
    private activatedRoute: ActivatedRoute,
    private settingService: SettingsServicesService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('settingsDetailsId')) {
        return;
      }
      const settingsId = paramMap.get('settingsDetailsId');
      this.loadedSetting = this.settingService.getSetting(settingsId);
    });
  }
  onEdit() {
    this.modalCtrl.create({ component: SettingsModalComponent }).then(modalEl => {
      modalEl.present();
    });
  }

}

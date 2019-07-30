import { Component, OnInit } from '@angular/core';
import { Setting } from './settings.model';
import { SettingsServicesService } from './settings-services.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  setting: Setting[];
  constructor(private settingService: SettingsServicesService) { }

  ngOnInit() {
    this.setting = this.settingService.getAllSettings();
  }

}

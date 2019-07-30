import { Injectable } from '@angular/core';
import { Setting } from './settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsServicesService {
  private settings: Setting[] = [
    {
      id: 'set_1',
      name: 'Peter Lam',
      gender: 'Male',
      email: 'peter.lam@gmail.com',
      password: '******',
      title: 'General'
    },
  ];
  constructor() { }

  getAllSettings() {
    return [...this.settings];
  }

  getSetting(settingsDetailsId: string) {
    return {
      ...this.settings.find(settings => {
        return settings.id === settingsDetailsId;
      })
    };
  }
}

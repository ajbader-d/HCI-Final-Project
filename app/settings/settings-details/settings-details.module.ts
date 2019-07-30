import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsDetailsPage } from './settings-details.page';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsDetailsPage, SettingsModalComponent],
  entryComponents: [SettingsModalComponent]
})
export class SettingsDetailsPageModule {}

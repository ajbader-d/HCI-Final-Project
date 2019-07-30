import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExperienceDetailPage } from './experience-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExperienceDetailPage]
})
export class ExperienceDetailPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: 'src/app/settings/settings.module#SettingsPageModule'
          },
          {
            path: ':settingsDetailsId',
            loadChildren: 'src/app/settings/settings-details/settings-details.module#SettingsDetailsPageModule'
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: 'src/app//favorites/favorites.module#FavoritesPageModule'
          }
        ]
      },
      {
        path: 'cities',
        children: [
          {
            path: '',
            loadChildren: 'src/app/cities/cities.module#CitiesPageModule'
          },
          {
            path: ':cityDetailsId',
            children: [
              {
                path: '',
                // loadChildren: './cities/city-detail/city-detail.module#CityDetailPageModule'
                loadChildren: 'src/app/cities/city-detail/city-detail.module#CityDetailPageModule'
              },
              {
                path: 'experiences',
                children: [
                  {
                    path: ':experiencesId',
                    loadChildren: 'src/app/experiences/experiences.module#ExperiencesPageModule'
                  },
                  {
                    path: ':experiencesId/:expDetail',
                    loadChildren: 'src/app/experiences/experience-detail/experience-detail.module#ExperienceDetailPageModule'
                  }
                ]
              },
              {
                path: ':basicInformation',
                loadChildren: 'src/app/basic-information/basic-information.module#BasicInformationPageModule',
              },
              {
                path: ':basicInformation/:basicInfoId',
                loadChildren: 'src/app/basic-information/details/details.module#DetailsPageModule'
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/cities',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }

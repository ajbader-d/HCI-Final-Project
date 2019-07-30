import { Injectable } from '@angular/core';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {
  private cities: City[] = [
    {
      id: 'rome',
      title: 'Rome',
      // subtitle: 'Rome is the city of echoes, the city of illusions, and the city of yearning.',
      subtitle: '',
      grade: '30°c Sunny',
      img: '../assets/img/hero-bk/rome.png',
      basicInfo: 'basicInfoRome',
      basicImgUrl: '../assets/img/hero-bk/basic-image.png',
      experienceUrl: 'experienceInRome',
      experienceFirst:  'Bike Tour of Ancient Appian Way, Catacombs & Aqueducts Park',
      experienceSecond: 'Wine Tasting in an Enoteca',
      experienceThird: 'Vatican and Sistine Chapel’s secret rooms',
      experienceImg: '../assets/img/hero-bk/rome_exp.png',
    },
    {
      id: 'paris',
      title: 'Paris',
      // subtitle: 'A walk about Paris will provide lessons in history, beauty, and in the point of Life.',
      subtitle: '',
      grade: '32°c Sunny',
      img: '../assets/img/hero-bk/paris.png',
      basicInfo: 'basicInfoParis',
      basicImgUrl: '../assets/img/hero-bk/parisBasic.png',
      experienceUrl: 'experienceInParis',
      experienceFirst: 'Explore the Hidden Architectural Gem of the Gare de Lyon',
      experienceSecond: 'Visit the Louvre, the world’s largest art museum.',
      experienceThird: 'Explore the Amazing Gothic Cathedral of Basilique Saint-Denis',
      experienceImg: '../assets/img/hero-bk/paris_exp.png',
    },
    {
      id: 'barcelona',
      title: 'Barcelona',
      // subtitle: 'Barcelona, archives of courtesy, shelter of the foreigners, hospital of the poor,and father-land of the brave',
      subtitle: '',
      grade: '35°c Sunny',
      img: '../assets/img/hero-bk/barcelona.png',
      basicInfo: 'basicInfoBarcelona',
      basicImgUrl: '../assets/img/hero-bk/barcelona_basic.png',
      experienceUrl: 'experienceInBarcelona',
      experienceFirst: 'Visit Park Güell at sunset, one of Gaudí’s major works in Barcelona.',
      experienceSecond: 'Ride A Steel Donkey, Steel Donkey Bike Tours are the first and only alternative bicycle rides in Barcelona.',
      experienceThird: 'Climb One of La Sagrada Familia Towers',
      experienceImg: '../assets/img/hero-bk/barcelona_exp.png',
    },
    {
      id: 'belrin',
      title: 'Berlin',
      // subtitle: 'You are crazy, my child. You must go to Berlin.',
      subtitle: '',
      grade: '28°c Sunny',
      img: '../assets/img/hero-bk/berlin.png',
      basicInfo: 'basicInfoBelrin',
      basicImgUrl: '../assets/img/hero-bk/berlinBasic.png',
      experienceUrl: 'experienceInBerlin',
      experienceFirst: 'Spreepark An eerie derelict amusement park sits abandoned outside of Berlin.',
      experienceSecond: 'Visit Tempelhofer Feld To get the blindingly obvious out of it',
      experienceThird: 'Liquidrom futuristic German spa',
      experienceImg: '../assets/img/hero-bk/berlin_exp.png',
    },
  ];

  constructor() { }

  getAllCities() {
    return [...this.cities];
  }

  getCity(cityDetailsId: string) {
    return {
      ...this.cities.find(cities => {
        return cities.id === cityDetailsId;
      })
    };
  }

  getBasicInfo(basicInformation: string) {
    return {
      ...this.cities.find(cities => {
        return cities.basicInfo === basicInformation;
      })
    };
  }

  getExperience(experiences: string) {
    return {
      ...this.cities.find(cities => {
        return cities.experienceUrl === experiences;
      })
    };
  }

}

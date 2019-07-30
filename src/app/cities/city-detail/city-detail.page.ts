import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { City } from '../city.model';
import { CitiesServiceService } from '../cities-service.service';
import { FavoriteService } from '../../favorite.service';


@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.page.html',
  styleUrls: ['./city-detail.page.scss'],
})
export class CityDetailPage implements OnInit {
  loadedCity: City;
  cityIdFav: any;
  isFavorite = false;
  constructor(
    private iab: InAppBrowser,
    private activatedRoute: ActivatedRoute,
    private cityService: CitiesServiceService,
    private storage: Storage,
    public favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('cityDetailsId')) {
        return;
      }
      const cityId = paramMap.get('cityDetailsId');
      this.loadedCity = this.cityService.getCity(cityId);
      this.favoriteService.isFavorite(cityId).then(isFav => {
        this.isFavorite = isFav;
      });
    });
    // this.favoriteService.reset();
  }

  favoriteCity(cityIdFav: any) {
    this.favoriteService.favoriteCity(cityIdFav).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteCity(cityIdFav: any) {
    this.favoriteService.unfavoriteCity(cityIdFav).then(() => {
      this.isFavorite = false;
    });
  }

  bus_service(city: string) {
    switch (city) {
      case 'rome': {
        this.iab.create('https://www.mycicero.it/orari-trasporto/ticketing');
        break;
      }
      case 'paris': {
        this.iab.create('https://www.ratp.fr/en/itineraires');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://com-shi-va.barcelona.cat/en/');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.bvg.de/en');
        break;
      }
    }
  }

  taxi_service(city: string) {
    switch (city) {
      case 'rome': {
        this.iab.create('https://login.mytaxi.com/');
        break;
      }
      case 'paris': {
        this.iab.create('https://www.chauffeurpriveparis.fr/en/');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://cabify.com/');
        break;
      }
      case 'belrin': {
        this.iab.create('https://login.mytaxi.com/');
        break;
      }
    }
  }

  hotel_service(city: string) {

    switch (city) {
      case 'rome': {
        this.iab.create('https://www.trivago.it/roma-44337/hotel');
        break;
      }
      case 'paris': {
        this.iab.create('https://www.france-hotel-guide.com/en/index.php');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://www.airbnb.com/');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.airbnb.com/');
        break;
      }
    }
  }

  mus_service(city: string) {

    switch (city) {
      case 'rome': {
        this.iab.create('https://www.ticketsrome.com/it/prenotazione-musei-roma');
        break;
      }
      case 'paris': {
        this.iab.create(' https://www.tiqets.com/en/paris-c66746');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://www.tiqets.com/en/barcelona-c66342');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.getyourguide.com/berlin-l17/museum-tickets-tc133/');
        break;
      }
    }
  }

  food_service(city: string) {
    switch (city) {
      case 'rome': {
        this.iab.create('https://www.justeat.it/domicilio/roma');
        break;
      }
      case 'paris': {
        this.iab.create('https://www.resto-in.fr/');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://glovoapp.com/en/bcn/category/RESTAURANT');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.lieferando.de/');
        break;
      }
    }
  }

  rest_service(city: string) {
    switch (city) {
      case 'rome': {
        this.iab.create('https://www.thefork.com/restaurant+rome');
        break;
      }
      case 'paris': {
        this.iab.create('https://www.thefork.com/city/paris/415144');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://www.thefork.com/city/barcelona/41710');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.opentable.com/berlin-restaurants');
        break;
      }
    }
  }

  cinema_service(city: string) {
    switch (city) {
      case 'rome': {
        this.iab.create('https://www.cinemaz.com/prenotazione-biglietti/multisala-roma-vicenza.html');
        break;
      }
      case 'paris': {
        this.iab.create('http://www.allocine.fr/salle/cinemas-pres-de-115755/');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://www.yelmocines.es/');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.cinestar.de/kino-berlin-original-im-sony-center');
        break;
      }
    }
  }

  flights_service(city: string) {
    switch (city) {
      case 'rome': {
        this.iab.create('https://www.skyscanner.it/voli-da/rome/voli-economici-da-roma.html');
        break;
      }
      case 'paris': {
        this.iab.create('https://www.skyscanner.it/voli-da/rome/voli-economici-da-roma.html');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://www.skyscanner.it/voli-da/rome/voli-economici-da-roma.html');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.skyscanner.it/voli-da/rome/voli-economici-da-roma.html');
        break;
      }
    }
  }

  atm_service(city: string) {
    switch (city) {
      case 'rome': {
        this.iab.create('https://bancomat.it/it/trova-atm');
        break;
      }
      case 'paris': {
        this.iab.create('https://www.simple.com/atms');
        break;
      }
      case 'barcelona': {
        this.iab.create('https://www.simple.com/atms');
        break;
      }
      case 'belrin': {
        this.iab.create('https://www.simple.com/atms');
        break;
      }
    }
  }

}

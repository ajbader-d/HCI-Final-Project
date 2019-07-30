import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteCity';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(public storage: Storage) { }

  isFavorite(cityId: any) {
    return this.getAllFavoriteCities().then(result => {
      return result && result.indexOf(cityId) !== -1;
    });
  }

  favoriteCity(cityId: any) {
    return this.getAllFavoriteCities().then(result => {
      // console.log(result);
      if (result) {
        result.push(cityId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [cityId]);
      }
    });
  }

  unfavoriteCity(cityId: any) {
    return this.getAllFavoriteCities().then(result => {
      if (result) {
        const index = result.indexOf(cityId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteCities() {
    return this.storage.get(STORAGE_KEY);
  }

  reset() {
    this.storage.clear();
  }
}

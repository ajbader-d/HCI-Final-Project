import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  wishItems: any[] = [];
  constructor(
    private storage: Storage,
    private favoriteService: FavoriteService
  ) { }

  ionViewWillEnter() {
    // console.log('ionViewDidLoad WishlistPage');
    this.loadWishItems();
  }

  ngOnInit() { }

  loadWishItems() {
    this.favoriteService.getAllFavoriteCities().then(val => {
      // console.log(val);
      this.wishItems = val;
    })
      .catch(err => { });
  }

}

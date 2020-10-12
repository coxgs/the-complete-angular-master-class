import { Component } from '@angular/core';

import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  courses = [1, 2];

  post = {
    title: "Title",
    isFavorite: false
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: " + eventArgs.newValue);
  }
}

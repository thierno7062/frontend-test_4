import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.slides =
          [
            { banner: 'https://i.pravatar.cc/345' },
            { banner: 'https://i.pravatar.cc/346' },
            { banner: 'https://i.pravatar.cc/347' },
            { banner: 'https://i.pravatar.cc/348' },
            { banner: 'https://i.pravatar.cc/349' },
            { banner: 'https://i.pravatar.cc/344' },
            { banner: 'https://i.pravatar.cc/343' },
            { banner: 'https://i.pravatar.cc/342' },
            { banner: 'https://i.pravatar.cc/341' },
          ];
          console.log(this.slides);

  }
}

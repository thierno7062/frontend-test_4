import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoPageRoutingModule } from './photo-routing.module';

import { PhotoPage } from './photo.page';
import { PhotoviewerComponentModule } from 'src/app/components/photoviewer/photoviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoPageRoutingModule,
    PhotoviewerComponentModule,
  ],
  declarations: [PhotoPage]
})
export class PhotoPageModule {}

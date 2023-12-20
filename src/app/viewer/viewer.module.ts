import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewerPageRoutingModule } from './viewer-routing.module';

import { ViewerPage } from './viewer.page';
import { PhotoviewerComponentModule } from '../components/photoviewer/photoviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewerPageRoutingModule,
    PhotoviewerComponentModule
  ],
  declarations: [ViewerPage]
})
export class ViewerPageModule {}

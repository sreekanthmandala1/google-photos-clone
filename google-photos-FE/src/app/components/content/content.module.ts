import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content/content.component';
import { PhotosComponent } from './photos/photos.component';
import { ExploreComponent } from './explore/explore.component';
import { SharingComponent } from './sharing/sharing.component';

@NgModule({
  declarations: [
    ContentComponent,
    PhotosComponent,
    ExploreComponent,
    SharingComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports : [
    ContentComponent,
    PhotosComponent,
    ExploreComponent,
    SharingComponent
  ]
})
export class ContentModule { }

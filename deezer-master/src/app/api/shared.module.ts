import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsAPI } from './artitsts.api';

@NgModule({
  declarations: [],
  exports: [CommonModule],
  providers: [ ArtistsAPI]
})
export class SharedModule {}

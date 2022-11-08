import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './ListaDeSeries/ListaDeSeries.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesComponent],
  exports: [SeriesComponent]
})
export class SeriesModule { }

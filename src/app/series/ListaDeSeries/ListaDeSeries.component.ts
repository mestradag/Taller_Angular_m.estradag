import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../datos.service';

@Component({
  selector: 'app-series',
  templateUrl: './ListaDeSeries.component.html',
  styleUrls: ['./ListaDeSeries.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService:SerieService) { }

  series: Array<Serie> = [];
  promedio: number=0;
  av: number=0;
  getSeries(){
    this.serieService.getSeries().subscribe((series)=>{
      this.series=series;
    });
  }

  Average(): void {
    this.series.forEach((serie) => {
      this.av = this.av + serie.seasons;

    });
    this.promedio = this.av/(this.series.length);
  }

  ngOnInit() {
    this.getSeries();
    this.Average();
  }

}

import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Tamales', 'Tortillas', 'Chorizo'];
  public doughnutChartData: MultiDataSet = [
    [100, 100, 100],
    [50, 100, 150],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize() {
    this.doughnutChartData = [
      [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
      [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
      [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
    ]
  }
}

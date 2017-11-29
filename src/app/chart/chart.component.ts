import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';
import { Http } from "@angular/http";
import { DatePipe } from '@angular/common';
import { ChartService } from './chart.service';
import { Chart } from './chart.interface';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: Chart = {
    type: '',
    data: {
        labels: [
           null
        ],
        datasets: [
            {
                label: '',
                data: [
                   null
                ],
                borderColor: '',
                fill: null
            }
        ]
    }
  }
  

  constructor(
    private chartService: ChartService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.chart = JSON.parse(localStorage.getItem('currentChart'));
  }
 
  /*
    Things to do for chart:
      change colors
      center chart
      have points end in 0
      make sure a straight line shows for a board with no stories in done lane
  */
  public lineChartColors:Array<any> = [ 
    {
    backgroundColor: 'rgb(255, 0, 0)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: 'rgb(255, 0, 0)',
    pointHoverBackgroundColor: 'rgb(255, 0, 0)',
    pointHoverBorderColor: 'rgb(255, 0, 0)'
    }
  ];

  public lineChartLabels:Array<any> = [ 
    {
      defaultFontSize: 20
    }
  ];

  public lineChartOptions:Array<any> = [ 
    {
    backgroundColor: 'rgb(255, 0, 0)',
    borderColor: 'rgb(255, 0, 0)',
    pointBackgroundColor: 'rgb(255, 0, 0)',
    pointBorderColor: 'rgb(255, 0, 0)',
    pointHoverBackgroundColor: 'rgb(255, 0, 0)',
    pointHoverBorderColor: 'rgb(255, 0, 0)'
    }
  ];
}

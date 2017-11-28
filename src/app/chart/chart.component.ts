import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';
import { Http } from "@angular/http";
import { DatePipe } from '@angular/common';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Temporary dummy data for practice
  public lineChartData:Array<any> = [
    {data: [43, 33, 31, 29, 25, 20], label: "Story Points"}
  ];

  public lineChartLabels:Array<any> = ["2017-10-30", "2017-11-01",
  "2017-11-02", "2017-11-03", "2017-11-06", "2017-11-07"];
 
  public lineChartColor:Array<any> = [ 
    {
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartType:string ='line';



}

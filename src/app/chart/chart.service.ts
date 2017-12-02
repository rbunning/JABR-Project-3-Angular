import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from './chart.interface';

@Injectable()
export class ChartService {
    
    private static getChartByBoardIdURL = '/chart-service/getChart/';

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient){}
    
    getChart(boardId): Observable<any> {
        console.log('getChart boardId = ' + boardId);
        return this.http.get(ChartService.getChartByBoardIdURL + boardId,  {headers: this.headers});
    }


}
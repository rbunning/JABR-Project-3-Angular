"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        //Temporary dummy data for practice
        this.lineChartData = [
            { data: [43, 33, 31, 29, 25, 20], label: "Story Points" }
        ];
        this.lineChartLabels = ["2017-10-30", "2017-11-01",
            "2017-11-02", "2017-11-03", "2017-11-06", "2017-11-07"];
        this.lineChartColor = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartType = 'line';
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'app-chart',
            templateUrl: './chart.component.html',
            styleUrls: ['./chart.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map
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
var swimlane_service_1 = require("./swimlane.service");
var SwimlaneComponent = /** @class */ (function () {
    function SwimlaneComponent(swimlaneService) {
        this.swimlaneService = swimlaneService;
        this.currentBoard = JSON.parse(localStorage.getItem('currentBoardForLanes'));
        this.currentBoardId = this.currentBoard[0].boardId;
        this.currentBoardName = this.currentBoard[0].boardName;
    }
    SwimlaneComponent.prototype.ngOnInit = function () {
        console.log("This is currentBoard", this.currentBoard);
        console.log(this.currentBoardId + ' ' + this.currentBoardName);
    };
    SwimlaneComponent = __decorate([
        core_1.Component({
            selector: 'app-swimlane',
            templateUrl: './swimlane.component.html',
            styleUrls: ['./swimlane.component.css']
        }),
        __metadata("design:paramtypes", [swimlane_service_1.SwimlaneService])
    ], SwimlaneComponent);
    return SwimlaneComponent;
}());
exports.SwimlaneComponent = SwimlaneComponent;
//# sourceMappingURL=swimlane.component.js.map
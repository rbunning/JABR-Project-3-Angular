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
var router_1 = require("@angular/router");
var swimlane_service_1 = require("./swimlane.service");
var create_story_service_1 = require("../create-story/create-story.service");
var SwimlaneComponent = /** @class */ (function () {
    function SwimlaneComponent(router, swimlaneService, createStoryService) {
        this.router = router;
        this.swimlaneService = swimlaneService;
        this.createStoryService = createStoryService;
        this.currentBoard = JSON.parse(localStorage.getItem('currentBoardForLanes'));
        this.currentBoardId = this.currentBoard[0].boardId;
        this.currentBoardName = this.currentBoard[0].boardName;
        // lanes = [
        //   "Backlog",
        //   "To Do",
        //   "In Progress",
        //   "Test",
        //   "Verify",
        //   "Done"
        // ]
        this.lanes = [
            { laneType: "Backlog", laneId: 1 },
            { laneType: "To Do", laneId: 2 },
            { laneType: "In Progress", laneId: 3 },
            { laneType: "Test", laneId: 4 },
            { laneType: "Verify", laneId: 5 },
            { laneType: "Done", laneId: 6 },
        ];
    }
    SwimlaneComponent.prototype.ngOnInit = function () {
        this.displayAllStories();
    };
    SwimlaneComponent.prototype.addStory = function () {
        this.router.navigateByUrl("/add-story");
    };
    SwimlaneComponent.prototype.displayAllStories = function () {
        var _this = this;
        this.swimlaneService.getAllStories(this.currentBoardId).subscribe(function (res) {
            _this.stories = res;
            console.log("Stories: ", _this.stories);
            localStorage.setItem('curentStories', JSON.stringify(res));
        });
    };
    SwimlaneComponent.prototype.switchLane = function (s, index) {
        console.log("index: ", index);
        console.log("story: ", s);
    };
    SwimlaneComponent = __decorate([
        core_1.Component({
            selector: 'app-swimlane',
            templateUrl: './swimlane.component.html',
            styleUrls: ['./swimlane.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            swimlane_service_1.SwimlaneService,
            create_story_service_1.CreateStoryService])
    ], SwimlaneComponent);
    return SwimlaneComponent;
}());
exports.SwimlaneComponent = SwimlaneComponent;
//# sourceMappingURL=swimlane.component.js.map
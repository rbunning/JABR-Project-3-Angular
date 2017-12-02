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
var create_story_service_1 = require("./create-story.service");
var router_1 = require("@angular/router");
var swimlane_service_1 = require("../swimlane/swimlane.service");
var CreateStoryComponent = /** @class */ (function () {
    function CreateStoryComponent(storyService, router, swimlaneService) {
        this.storyService = storyService;
        this.router = router;
        this.swimlaneService = swimlaneService;
        this.currentBoard = JSON.parse(localStorage.getItem('currentBoardForLanes'));
        this.currentBoardId = this.currentBoard[0].boardId;
        this.story = {
            storyId: null,
            storyDesc: '',
            storyName: '',
            storyPoints: null,
            // board: 1 // need to be change so that it get the current boards id
            board: this.currentBoardId
        };
    }
    CreateStoryComponent.prototype.ngOnInit = function () {
        console.log("Story->boardId ", this.currentBoardId);
    };
    CreateStoryComponent.prototype.storySubmit = function () {
        this.storyService.createNewStory(this.story).subscribe(function (res) {
            // this.router.navigateByUrl('/boards');
            //   this.router.navigate(['/detail'], this.currentBoardId);
        });
    };
    CreateStoryComponent = __decorate([
        core_1.Component({
            selector: 'app-create-story',
            templateUrl: './create-story.component.html',
            styleUrls: ['./create-story.component.css']
        }),
        __metadata("design:paramtypes", [create_story_service_1.CreateStoryService,
            router_1.Router,
            swimlane_service_1.SwimlaneService])
    ], CreateStoryComponent);
    return CreateStoryComponent;
}());
exports.CreateStoryComponent = CreateStoryComponent;
//# sourceMappingURL=create-story.component.js.map
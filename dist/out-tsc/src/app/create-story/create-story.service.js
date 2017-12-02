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
var http_1 = require("@angular/common/http");
var CreateStoryService = /** @class */ (function () {
    function CreateStoryService(http) {
        this.http = http;
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    CreateStoryService_1 = CreateStoryService;
    CreateStoryService.prototype.createNewStory = function (story) {
        return this.http.post(CreateStoryService_1.ADD_STORY_URL, story, { headers: this.headers });
    };
    CreateStoryService.prototype.moveStoryLane = function (story) {
        return this.http.post(CreateStoryService_1.MOVE_STORY_URL, story, { headers: this.headers });
    };
    CreateStoryService.ADD_STORY_URL = '/story-manager-service/addStory';
    CreateStoryService.MOVE_STORY_URL = '/story-manager-service/moveStoryLane';
    CreateStoryService = CreateStoryService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CreateStoryService);
    return CreateStoryService;
    var CreateStoryService_1;
}());
exports.CreateStoryService = CreateStoryService;
//# sourceMappingURL=create-story.service.js.map
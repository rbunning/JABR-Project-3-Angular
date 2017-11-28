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
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    TaskService_1 = TaskService;
    TaskService.prototype.createTask = function (task) {
        console.log('task.service.ts storyId=' + task.storyId + ' task description ' + task.description);
        return this.http.post(TaskService_1.NEW_TASK_URL, task, { headers: this.headers });
    };
    //gets input of storyId and adds to getAllTasks URL
    // will change this later to simply grab the storyid of the story in the lane
    TaskService.prototype.getTasks = function (storyIdInput) {
        console.log('getTasks storyID = ' + storyIdInput);
        return this.http.get(TaskService_1.getAllTasksByStoryIdURL + storyIdInput, { headers: this.headers });
    };
    // 
    TaskService.NEW_TASK_URL = '/task-manager-service/newTask';
    TaskService.getAllTasksByStoryIdURL = '/task-manager-service/getAllTasks/';
    TaskService = TaskService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TaskService);
    return TaskService;
    var TaskService_1;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map
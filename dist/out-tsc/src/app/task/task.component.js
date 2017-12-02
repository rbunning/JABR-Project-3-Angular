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
var task_service_1 = require("./task.service");
var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.task = {
            taskId: null,
            storyId: null,
            description: ''
        };
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.taskSubmit = function () {
        console.log("Creating new task: ", (this.task).description);
        this.taskService.createTask(this.task).subscribe(function (res) {
            console.log("Create Task Success!", res);
        });
    };
    TaskComponent.prototype.getTasksSubmit = function (storyIdInput) {
        var _this = this;
        console.log("Get tasks by this ID: " + storyIdInput);
        this.taskService.getTasks(storyIdInput).subscribe(function (res) {
            console.log("Get tasks success!", res);
            //places reponse of task-manager-service/getAllTasks/{storyId} into task array
            _this._tasksArray = res;
        });
    };
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'app-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService,
            router_1.Router])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map
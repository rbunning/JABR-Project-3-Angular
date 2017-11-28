"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_service_1 = require("./login/user.service");
var boards_service_1 = require("./boards/boards.service");
var navbar_service_1 = require("./navbar/navbar.service");
var scrum_home_component_1 = require("./scrum-home/scrum-home.component");
var task_component_1 = require("./task/task.component");
var home_component_1 = require("./home/home.component");
var boards_component_1 = require("./boards/boards.component");
var board_detail_component_1 = require("./board-detail/board-detail.component");
var task_service_1 = require("./task/task.service");
var add_board_component_1 = require("./add-board/add-board.component");
var order_by_pipe_1 = require("./boards/order-by.pipe");
var swimlane_component_1 = require("./swimlane/swimlane.component");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'task', component: task_component_1.TaskComponent },
    { path: 'scrum-home', redirectTo: 'boards', pathMatch: 'full' },
    { path: 'home', redirectTo: 'boards', pathMatch: 'full' },
    { path: 'boards', component: boards_component_1.BoardsComponent },
    { path: 'add-board', component: add_board_component_1.AddBoardComponent },
    { path: 'detail/:id', component: board_detail_component_1.BoardDetailComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                scrum_home_component_1.ScrumHomeComponent,
                task_component_1.TaskComponent,
                home_component_1.HomeComponent,
                boards_component_1.BoardsComponent,
                board_detail_component_1.BoardDetailComponent,
                add_board_component_1.AddBoardComponent,
                order_by_pipe_1.OrderByPipe,
                swimlane_component_1.SwimlaneComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                http_2.HttpModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(routes)
            ],
            providers: [common_1.DatePipe, user_service_1.UserService, boards_service_1.BoardsService, navbar_service_1.NavbarService, task_service_1.TaskService, boards_component_1.BoardsComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
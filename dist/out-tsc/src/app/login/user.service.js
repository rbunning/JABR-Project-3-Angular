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
var UserService = /** @class */ (function () {
    //Inject HttpClient to http thru a constructor
    function UserService(http) {
        this.http = http;
        // private static readonly LOGIN_URL = '/login';
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    UserService_1 = UserService;
    //Inject User interface to user, using Observable for async data
    //It's a normal post request
    UserService.prototype.loginUser = function (user) {
        console.log(user.scrumUserUsername + ' ' + user.scrumUserPassword);
        return this.http.post(UserService_1.LOGIN_URL, user, { headers: this.headers });
    };
    //this will be
    //http://localhost:8765/user-service/login
    UserService.LOGIN_URL = '/user-service/login';
    UserService = UserService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
    var UserService_1;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
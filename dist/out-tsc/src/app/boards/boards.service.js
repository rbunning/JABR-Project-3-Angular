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
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var BoardsService = /** @class */ (function () {
    function BoardsService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.GET_ALL_BOARDS = '/board-manager-service/getAllBoards';
    }
    BoardsService_1 = BoardsService;
    //Retrieve all boards from current user
    BoardsService.prototype.getAllBoards = function () {
        return this.http.get(this.GET_ALL_BOARDS)
            .map(function (response) { return response.json(); });
    };
    //Retrieve a single board based on selection
    BoardsService.prototype.getBoard = function (scrumUserId) {
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'text/plain' });
        console.log("scrumUserId: ", scrumUserId);
        return this.httpClient.post(BoardsService_1.BOARDS_URL, scrumUserId, { headers: headers });
    };
    //Add a board based with a board name
    BoardsService.prototype.addBoard = function (newBoard) {
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post(BoardsService_1.ADD_BOARD_URL, newBoard, { headers: headers });
    };
    BoardsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BoardsService.BOARDS_URL = '/board-manager-service/getBoards';
    BoardsService.ADD_BOARD_URL = '/board-manager-service/newBoard';
    BoardsService = BoardsService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_2.Http,
            http_1.HttpClient])
    ], BoardsService);
    return BoardsService;
    var BoardsService_1;
}());
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map
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
var board_interface_1 = require("../boards/board.interface");
var boards_service_1 = require("../boards/boards.service");
var BoardDetailComponent = /** @class */ (function () {
    function BoardDetailComponent(boardsService, route) {
        this.boardsService = boardsService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    BoardDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.currenBoardId = id;
            _this.navigated = true;
            _this.boardsService.getBoard(id).subscribe(function (res) {
                console.log('log currentBoard', res);
                // localStorage.setItem('currentBoard', JSON.stringify(res));
            });
        });
        this.callCurrentBoard();
    };
    BoardDetailComponent.prototype.callCurrentBoard = function () {
        this.boardsService.getBoard(this.currenBoardId).subscribe(function (res) {
            console.log('log currentBoard call', res);
            localStorage.setItem('currentBoardForLanes', JSON.stringify(res));
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", board_interface_1.Board)
    ], BoardDetailComponent.prototype, "board", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BoardDetailComponent.prototype, "close", void 0);
    BoardDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-board-detail',
            templateUrl: './board-detail.component.html',
            styleUrls: ['./board-detail.component.css']
        }),
        __metadata("design:paramtypes", [boards_service_1.BoardsService,
            router_1.ActivatedRoute])
    ], BoardDetailComponent);
    return BoardDetailComponent;
}());
exports.BoardDetailComponent = BoardDetailComponent;
//# sourceMappingURL=board-detail.component.js.map
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
var boards_service_1 = require("./boards.service");
var BoardsComponent = /** @class */ (function () {
    function BoardsComponent(router, boardsService) {
        this.router = router;
        this.boardsService = boardsService;
        this.order = "boardId";
        this.ascending = true;
        this.newBoard = {
            boardName: ''
        };
        //use this syntax to fetch the specific variable you need
        // var scrumUserId = JSON.parse(localStorage.getItem('currentUser')).scrumUserId;
        this.scrumUserId = JSON.parse(localStorage.getItem("currentUser")).scrumUserId;
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).roleType.roleId;
    }
    BoardsComponent.prototype.ngOnInit = function () {
        this.displayAllBoards();
    };
    BoardsComponent.prototype.displayAllBoards = function () {
        var _this = this;
        this.boardsService.getAllBoards().subscribe(function (res) {
            _this.boards = res;
            console.log("This is somethign for board ", _this.boards);
            localStorage.setItem('currentBoards', JSON.stringify(res));
        });
        console.log("Hello id", this.scrumUserId);
    };
    BoardsComponent.prototype.onSelect = function (board, num, str) {
        console.log("This board: ", board);
        this.selectedBoard = board;
        this.id = num;
        this.name = str;
        this.gotoDetail();
    };
    BoardsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.id]);
    };
    BoardsComponent.prototype.addBoard = function () {
        if (this.newBoard.boardName == '') {
            console.error("You must have a name for board");
            window.alert("Board Name cannot be empty");
        }
        else {
            this.boardsService.addBoard(this.newBoard).subscribe(function (res) {
                console.log("This is for testing: ", res);
            });
        }
    };
    BoardsComponent = __decorate([
        core_1.Component({
            selector: 'app-boards',
            templateUrl: './boards.component.html',
            styleUrls: ['./boards.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            boards_service_1.BoardsService])
    ], BoardsComponent);
    return BoardsComponent;
}());
exports.BoardsComponent = BoardsComponent;
//# sourceMappingURL=boards.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var navbar_service_1 = require("./navbar.service");
describe('NavbarService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [navbar_service_1.NavbarService]
        });
    });
    it('should be created', testing_1.inject([navbar_service_1.NavbarService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=navbar.service.spec.js.map
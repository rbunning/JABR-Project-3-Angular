"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var swimlane_service_1 = require("./swimlane.service");
describe('SwimlaneService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [swimlane_service_1.SwimlaneService]
        });
    });
    it('should be created', testing_1.inject([swimlane_service_1.SwimlaneService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=swimlane.service.spec.js.map
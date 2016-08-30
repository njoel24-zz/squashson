System.register(['angular2/core', './mock-matches', "rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_matches_1, Observable_1;
    var MatchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_matches_1_1) {
                mock_matches_1 = mock_matches_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MatchService = (function () {
                function MatchService() {
                }
                MatchService.prototype.getMatches = function () {
                    return Promise.resolve(mock_matches_1.Matches);
                };
                MatchService.prototype.setObservable = function (winner) {
                    this.observableData = new Observable_1.Observable(function (observer) {
                        observer.next(winner);
                        console.log("this observable is being subscribed to");
                    });
                };
                MatchService.prototype.setObservable2 = function (value) {
                    this.observableData = new Observable_1.Observable(function (observer) {
                        observer.next(value);
                        console.log("this observable is being subscribed to");
                    });
                };
                MatchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MatchService);
                return MatchService;
            }());
            exports_1("MatchService", MatchService);
        }
    }
});
//# sourceMappingURL=match.service.js.map
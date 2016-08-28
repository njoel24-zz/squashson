System.register(['angular2/core', 'angular2/router', './match.service', './match.consts', "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, router_1, match_service_1, match_consts_1, Observable_1;
    var any, MatchesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (match_service_1_1) {
                match_service_1 = match_service_1_1;
            },
            function (match_consts_1_1) {
                match_consts_1 = match_consts_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MatchesComponent = (function () {
                function MatchesComponent(_router, _matchService, _matchConsts) {
                    this._router = _router;
                    this._matchService = _matchService;
                    this._matchConsts = _matchConsts;
                }
                MatchesComponent.prototype.setWinner = function (match) {
                    var winner = 0;
                    var points1 = match.points1;
                    var points2 = match.points2;
                    if (points1 < this._matchConsts.matchPoints && points2 < this._matchConsts.matchPoints) {
                        return;
                    }
                    if (points1 === points2) {
                        return;
                    }
                    if (points1 > points2) {
                        winner = match.idPlayer1;
                    }
                    else if (points1 < points2) {
                        winner = match.idPlayer2;
                    }
                    match.isFinished = true;
                    localStorage.setItem("matches", JSON.stringify(this.matches));
                    //create an observable , emit setWinner, so the leaderboard can reset update itself
                    this.observableData = new Observable_1.Observable(function (observer) {
                        observer.next(winner);
                        console.log("this observable is being subscribed to");
                    });
                };
                MatchesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var content = localStorage.getItem("matches");
                    if (content) {
                        this.matches = JSON.parse(content);
                        var i;
                        //emit matchStart, so the leaderboard can reset itself
                        this.observableData = new Observable_1.Observable(function (observer) {
                            observer.next(_this._matchConsts.resetLeaderboard);
                            console.log("this observable is being subscribed to");
                        });
                        for (i = 0; i < (this.matches.length - 1); i++) {
                            this.setWinner(this.matches[i]);
                        }
                    }
                    else {
                        this._matchService.getMatches().then(function (matches) { return _this.matches = matches; });
                    }
                };
                MatchesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-matches',
                        templateUrl: 'MatchComponent/matches.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, match_service_1.MatchService, match_consts_1.MatchConsts])
                ], MatchesComponent);
                return MatchesComponent;
            }());
            exports_1("MatchesComponent", MatchesComponent);
        }
    }
});
//# sourceMappingURL=matches.component.js.map
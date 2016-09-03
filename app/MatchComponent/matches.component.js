System.register(['angular2/core', 'angular2/router', './match.service', '../LeaderboardComponent/player.service', './match.consts', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, router_1, match_service_1, player_service_1, match_consts_1, Rx_1;
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
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (match_consts_1_1) {
                match_consts_1 = match_consts_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            MatchesComponent = (function () {
                function MatchesComponent(_router, _matchService, _matchConsts, _playerService) {
                    this._router = _router;
                    this._matchService = _matchService;
                    this._matchConsts = _matchConsts;
                    this._playerService = _playerService;
                }
                MatchesComponent.prototype.restartMatches = function () {
                    localStorage.clear();
                    this.setEnvironment();
                };
                MatchesComponent.prototype.setWinner = function (match) {
                    var _this = this;
                    var winner = 0;
                    var points1 = parseInt(match.points1);
                    var points2 = parseInt(match.points2);
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
                    Rx_1.default.Observable.of(winner).subscribe(function (value) {
                        console.log("new value from Observable:" + value);
                        switch (value) {
                            case _this._matchConsts.resetLeaderboard:
                                _this._playerService.resetLeaderboard();
                                break;
                            default:
                                _this._playerService.updateLeaderboard(value);
                                break;
                        }
                    });
                };
                MatchesComponent.prototype.ngOnInit = function () {
                    this.setEnvironment();
                };
                MatchesComponent.prototype.setEnvironment = function () {
                    var _this = this;
                    var content = localStorage.getItem("matches");
                    if (content) {
                        this._playerService.resetLeaderboard();
                        this.matches = JSON.parse(content);
                        Rx_1.default.Observable.of(this.matches).subscribe(function (value) {
                            console.log("new value from Observable:" + value);
                            for (i = 0; i < (value.length - 1); i++) {
                                _this.setWinner(_this.matches[i]);
                            }
                        });
                        var i;
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
                    __metadata('design:paramtypes', [router_1.Router, match_service_1.MatchService, match_consts_1.MatchConsts, player_service_1.PlayerService])
                ], MatchesComponent);
                return MatchesComponent;
            }());
            exports_1("MatchesComponent", MatchesComponent);
        }
    }
});
//# sourceMappingURL=matches.component.js.map
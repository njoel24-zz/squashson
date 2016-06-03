System.register(['angular2/core', 'angular2/router', './match.service', '../LeaderboardComponent/player.service'], function(exports_1, context_1) {
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
    var core_1, router_1, match_service_1, player_service_1;
    var MatchesComponent;
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
            }],
        execute: function() {
            MatchesComponent = (function () {
                function MatchesComponent(_router, _matchService, _playerService) {
                    this._router = _router;
                    this._matchService = _matchService;
                    this._playerService = _playerService;
                }
                MatchesComponent.prototype.setWinner = function (match) {
                    var winner = 0;
                    if (match.points1 === match.points2) {
                        return;
                    }
                    if (match.points1 > match.points2) {
                        winner = match.idPlayer1;
                    }
                    else if (match.points1 < match.points2) {
                        winner = match.idPlayer2;
                    }
                    this._playerService.updateLeaderboard(winner);
                };
                MatchesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._matchService.getMatches()
                        .then(function (matches) { return _this.matches = matches; });
                };
                MatchesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-matches',
                        templateUrl: 'src/MatchComponent/matches.component.html',
                        styleUrls: ['src/MatchComponent/matches.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, match_service_1.MatchService, player_service_1.PlayerService])
                ], MatchesComponent);
                return MatchesComponent;
            }());
            exports_1("MatchesComponent", MatchesComponent);
        }
    }
});
//# sourceMappingURL=matches.component.js.map
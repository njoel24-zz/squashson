System.register(['angular2/core', 'angular2/router', '../LeaderboardComponent/player.service', "../MatchComponent/matches.component", '../MatchComponent/match.consts'], function(exports_1, context_1) {
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
    var core_1, router_1, player_service_1, matches_component_1, match_consts_1;
    var LeaderboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (matches_component_1_1) {
                matches_component_1 = matches_component_1_1;
            },
            function (match_consts_1_1) {
                match_consts_1 = match_consts_1_1;
            }],
        execute: function() {
            LeaderboardComponent = (function () {
                function LeaderboardComponent(_router, _playerService, _matchComponents, _matchConsts) {
                    var _this = this;
                    this._router = _router;
                    this._playerService = _playerService;
                    this._matchComponents = _matchComponents;
                    this._matchConsts = _matchConsts;
                    _matchComponents.observableData.subscribe(function (value) {
                        switch (value) {
                            case _this._matchConsts.resetLeaderboard:
                                _this._playerService.resetLeaderboard();
                                break;
                            default:
                                _this._playerService.updateLeaderboard(value);
                                break;
                        }
                    }, function (error) { return console.log(error); }, function () { return console.log("nothing to send"); });
                }
                LeaderboardComponent.prototype.getPlayers = function () {
                    var _this = this;
                    this._playerService.getPlayers().then(function (players) { return _this.players = players; });
                };
                LeaderboardComponent.prototype.ngOnInit = function () {
                    this.getPlayers();
                };
                LeaderboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-leaderboard',
                        templateUrl: 'LeaderboardComponent/leaderboard.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService, matches_component_1.MatchesComponent, match_consts_1.MatchConsts])
                ], LeaderboardComponent);
                return LeaderboardComponent;
            }());
            exports_1("LeaderboardComponent", LeaderboardComponent);
        }
    }
});
//# sourceMappingURL=leaderboard.component.js.map
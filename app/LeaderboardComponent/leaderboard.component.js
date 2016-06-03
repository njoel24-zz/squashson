System.register(['angular2/core', 'angular2/router', '../LeaderboardComponent/player.service'], function(exports_1, context_1) {
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
    var core_1, router_1, player_service_1;
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
            }],
        execute: function() {
            LeaderboardComponent = (function () {
                function LeaderboardComponent(_router, _playerService) {
                    this._router = _router;
                    this._playerService = _playerService;
                }
                LeaderboardComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._playerService.getPlayers().then(function (players) { return _this.players = players; });
                };
                LeaderboardComponent.prototype.updateLeaderboard = function () {
                };
                LeaderboardComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                LeaderboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-leaderboard',
                        templateUrl: 'src/LeaderboardComponent/leaderboard.component.html',
                        styleUrls: ['src/LeaderboardComponent/leaderboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService])
                ], LeaderboardComponent);
                return LeaderboardComponent;
            }());
            exports_1("LeaderboardComponent", LeaderboardComponent);
        }
    }
});
//# sourceMappingURL=leaderboard.component.js.map
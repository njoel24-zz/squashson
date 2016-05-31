System.register(['angular2/core', 'angular2/router', './hero.service', './match.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1, match_service_1;
    var MatchesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (match_service_1_1) {
                match_service_1 = match_service_1_1;
            }],
        execute: function() {
            MatchesComponent = (function () {
                function MatchesComponent(_router, _heroService, _matchService) {
                    this._router = _router;
                    this._heroService = _heroService;
                    this._matchService = _matchService;
                    this.matches = [];
                }
                MatchesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._matchService.getMatches()
                        .then(function (heroes) { return _this.matches = heroes.slice(1, 5); });
                };
                MatchesComponent.prototype.gotoDetail = function (hero) {
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                MatchesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-matches',
                        templateUrl: 'app/matches.component.html',
                        styleUrls: ['app/matches.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, match_service_1.MatchService])
                ], MatchesComponent);
                return MatchesComponent;
            }());
            exports_1("MatchesComponent", MatchesComponent);
        }
    }
});
//# sourceMappingURL=matches.component.js.map
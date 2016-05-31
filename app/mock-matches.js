System.register(['./hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hero_service_1;
    var Matches;
    return {
        setters:[
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            exports_1("Matches", Matches = [
                { 'id': 1, 'player1': hero_service_1.HeroService.getHero(1), 'points1': 0, 'player2': hero_service_1.HeroService.getHero(2), 'points2': 0, 'isFinished': false },
            ]);
        }
    }
});
//# sourceMappingURL=mock-matches.js.map
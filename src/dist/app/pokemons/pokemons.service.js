"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PokemonsService = /** @class */ (function () {
    function PokemonsService(http) {
        this.http = http;
        this.pokemonsUrl = "api/pokemons";
    }
    // Retourne tous les pokémons
    PokemonsService.prototype.getPokemons = function () {
        var _this = this;
        return this.http.get(this.pokemonsUrl).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemons"); }), operators_1.catchError(this.handleError("getPokemons", [])));
    };
    // permet d'afficher les un log
    PokemonsService.prototype.log = function (message) {
        console.log(message);
    };
    PokemonsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            console.log(operation + " failed : " + error);
            return rxjs_1.of(result);
        };
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemons id " + id); }), operators_1.catchError(this.handleError("getPokemon id " + id)));
    };
    // Retourne tous les types de pokémons
    PokemonsService.prototype.getPokemonTypes = function () {
        var pokemonsType = [];
        var pokemons = this.getPokemons();
        /*
          for(let index = 0; index < 5; index++ ){
            let types = pokemons[index].types;
            for(let i = 0; i< types.length; i++){
              if(pokemonsType.indexOf(types[i]) === -1 ){
                pokemonsType.push(types[i]);
              }
            }
          }
    */
        pokemonsType = ["Eau", "Poison", "Mario", 'Lion'];
        return pokemonsType;
    };
    PokemonsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map
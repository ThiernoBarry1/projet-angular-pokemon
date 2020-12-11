import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { Router } from "@angular/router";
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html',
})

export class ListPokemonComponent  implements OnInit{ 

    private pokemons: Pokemon[] = null;
    private titre: string = "Liste des pokémons";
    private value: string = "";
    
    constructor(private router: Router, private pokemonService: PokemonsService){}
    /** plutôt conseiller d'initialiser les données 
     venant de l'exterieurs(server, base de données)
     que dans le constructeur.
    */
    ngOnInit(){
        this.pokemons = this.pokemonService.getPokemons();
    }
    
    selectPokemon(pokemon: Pokemon){
       let link = ["/pokemon", pokemon.id];
       this.router.navigate(link);
    }
 }

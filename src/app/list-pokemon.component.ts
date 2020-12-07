import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";
import { Router } from "@angular/router";

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/list-pokemon.component.html'
})

export class ListPokemonComponent  implements OnInit{ 

    private pokemons: Pokemon[] = null;
    private titre: string = "Liste des pokémons";
    private value: string = "";
    
    constructor(private router: Router){}
    /** plutôt conseiller d'initialiser les données 
     venant de l'exterieurs(server, base de données)
     que dans le constructeur.
    */
    ngOnInit(){
        this.pokemons = POKEMONS;
    }
    
    selectPokemon(pokemon: Pokemon){
       let link = ["/pokemon", pokemon.id];
       this.router.navigate(link);
    }
 }

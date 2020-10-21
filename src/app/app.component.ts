import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
    selector: 'pokemon-app',
    templateUrl: './app/app-component.html'
})

export class AppComponent  implements OnInit{ 

    private pokemons: Pokemon[];
    private titre: string = "Liste des pokémons";
    private value: string = "";

    /** plutôt conseiller d'initialiser les données 
     venant de l'exterieurs(server, base de données)
     que dans le constructeur.
    */
    ngOnInit(){
        this.pokemons = POKEMONS;
    }
    onClick(){
        console.log('cliquer');
    }
    onKey(event:string){
         this.value = "Bonjour "+ event;
    }
    selectPokemon(pokemon: Pokemon){
       alert("vous avez cliquer sur "+pokemon.name);
    }
 }

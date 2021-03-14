import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
  
@Injectable()
export class PokemonsService {
  
    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
      return POKEMONS;
    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon {
      let pokemons = this.getPokemons();
      
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
          return pokemons[index];
        }
      }
    }
    getPokemonTypes():Array<string>{
      let pokemonsType: Array<string> = [];
      let pokemons = this.getPokemons();
      for(let index = 0; index < pokemons.length; index++ ){
        let types = pokemons[index].types;
        for(let i = 0; i< types.length; i++){
          if(pokemonsType.indexOf(types[i]) === -1 ){
            pokemonsType.push(types[i]); 
          }
        }
      }

      return pokemonsType;
    }

}
import { Injectable, TemplateRef } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class PokemonsService {
    private pokemonsUrl = "api/pokemons" ;
    constructor(private http: HttpClient){}
    
    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
        tap(_=>this.log(`fetched pokemons`)),
        catchError(this.handleError(`getPokemons`, []))
      );
    }    

    // permet d'afficher les un log
    private log(message:string){
      console.log(message);
    }
    private handleError<T>(operation='operation',result ?:T){
      return (error :any ):Observable<T> =>{
        console.log(error);
        console.log(`${operation} failed : ${error}`);
        return  of(result as T);
      }
    }
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
      const url = `${this.pokemonsUrl}/${id}`;
      return this.http.get<Pokemon>(url).pipe(
        tap(_=>this.log(`fetched pokemons id ${id}`)),
        catchError(this.handleError<Pokemon>(`getPokemon id ${id}`))
      );
    }
    
    updatePokemon(pokemon:Pokemon): Observable<Pokemon> {
      const httpObtions = {
        headers: new HttpHeaders({'Content-type':'application/json'})
      };
      return this.http.put(this.pokemonsUrl, pokemon, httpObtions).pipe(
        tap(_=>this.log(`updated pokemon id ${pokemon.id}`)),
        catchError(this.handleError<any>(`updatedPokemon`))
      );
    }

    searchPokemons(term: string): Observable<Pokemon []>{
        if(!term.trim()){
          return of([]);
        }
        return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
          tap(_=>this.log(`found pokemons matching ${term}`)),
          catchError(this.handleError<Pokemon []>(`searchPokemons`,[]))
        );
    }
    deletePokemon(pokemon: Pokemon): Observable<Pokemon>{
      const url = `${this.pokemonsUrl}/${pokemon.id}`;
      const httpObtions = {
        headers: new HttpHeaders({'Content-type':'application/json'})
      };
      return this.http.delete<Pokemon>(url, httpObtions).pipe(
        tap(_=>this.log(`deleted pokemon id ${pokemon.id}`)),
        catchError(this.handleError<Pokemon>(`deletePokemon`))
      )
    }
    // Retourne tous les types de pokémons
    getPokemonTypes():Array<string>{
      let pokemonsType: Array<string> = [];
    /*  let pokemons = this.getPokemons();
      for(let index = 0; index < 5; index++ ){
        let types = pokemons[index].types;
        for(let i = 0; i< types.length; i++){
          if(pokemonsType.indexOf(types[i]) === -1 ){
            pokemonsType.push(types[i]); 
          }
        }
      }
*/
 pokemonsType = [`Eau`,`Poison`,`Mario`,'Lion'];
      return pokemonsType;
    }

}
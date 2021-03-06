import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from "./pokemons-routing.module";
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import {PokemonSearchComponent} from './search-pokemon.component'; 
import { FormsModule } from "@angular/forms";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form.component";
import { LoaderComponent } from "../loader.component";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonsRoutingModule,
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        EditPokemonComponent,
        PokemonSearchComponent,
        LoaderComponent,
        PokemonFormComponent,
        PokemonTypeColorPipe,
    ],
    providers: [PokemonsService]
})
export class PokemonsModule { }
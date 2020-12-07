
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { AppComponent } from "./app.component";
import { PictureDirective } from "./picture.directive";
import { AppRoutingModule } from './app-routing.module';
import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { PageNotFoundComponent } from './page-not-found.component';
@NgModule({
    imports: [ BrowserModule,AppRoutingModule ],
    declarations: [ AppComponent, BorderCardDirective, PokemonTypeColorPipe,
                     DetailPokemonComponent,ListPokemonComponent,PageNotFoundComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
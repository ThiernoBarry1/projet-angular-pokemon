
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { AppComponent } from "./app.component";
import { PictureDirective } from "./picture.directive";
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, BorderCardDirective, PokemonTypeColorPipe ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
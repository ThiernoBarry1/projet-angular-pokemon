
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonsModule } from "./pokemons/pokemons.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import {  HttpClientModule} from "@angular/common/http";
import {  HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import {  InMemoryDataService } from "./in-memory-data-service";
@NgModule({
    imports: [ BrowserModule,
               HttpClientModule,
               HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
               PokemonsModule,
               AppRoutingModule 
            ],
    declarations: [ AppComponent, 
                    PageNotFoundComponent 
                   ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
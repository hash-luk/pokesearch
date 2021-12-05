import { Component, OnInit,ViewEncapsulation, } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon';
import { PokeService } from './services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent implements OnInit {
  //Api variables
  pokemon = {} as Pokemons;
  pokemons: Array<any> = new Array();
  pokemonIDGet : Array<any> = new Array();

  pokemonsarched: number = 0;

  //Pagination Variables
  page = 1;
  count = 0;
  totalitens = 1118;
  itensinpage = 20;

  // Search
  searchString: string = ''

  //Pokemon Images
  pokeID =''

  constructor(private pokeService: PokeService) {}

  ngOnInit() {
    this.getPokemons()
  }
  //Get Api response
  getPokemons() {
    this.pokeService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons.results));
  }

  //Pagination Events
  onTableDataChange(event: any) {
    this.page = event;
    this.getPokemons();
  }
  title = 'advise';
}

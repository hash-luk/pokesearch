import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString:string) {

    if(value.lenght === 0 || searchString === '') {
      return value;
    }

    const pokemons = [];

    for(const pokemon of value) {
      if(pokemon.name.includes(searchString) || pokemon.url.split('/')[6] === searchString ) {
        pokemons.push(pokemon)
      }
    }
    return pokemons;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PokeService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
   return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118")
  }

  getPokemonByName(pokemon:string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {headers:{'Access-Control-Allow-Origin' : '*' }})
  }
}

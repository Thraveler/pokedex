import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestPokemon, PokemonDetails } from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL = "https://pokeapi.co/api/v2/pokemon"
  limitRequest = "?limit=964"

  constructor(
    private http: HttpClient
  ) { }

  // Get pokemons
  getPokemons(): Observable<RequestPokemon> {
    console.log(`${this.baseURL}/${this.limitRequest}`);
    return this.http.get<RequestPokemon>(`${this.baseURL}/${this.limitRequest}`);
  }

  getPokemonetails(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.baseURL}/${name}`);
  }
}

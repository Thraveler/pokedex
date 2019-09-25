import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pokemon, PokemonDetails } from "../../models/pokemon";
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  @Input() pokemonSelected: Pokemon[]
  pokemons: Pokemon[] = []

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private location: Location
    ) { }
    
  ngOnInit() {
    this.pokemons = this.pokemonSelected
  }

}

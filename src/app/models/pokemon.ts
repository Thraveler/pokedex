export interface Pokemon {
  name: string;
  url: string;
  details: PokemonDetails
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: [{
    type: { 
      name: string
    }
  }];
  sprites: {front_default: string };
  stats: [{
    base_stat: number, 
    stat: { 
      name: string
    }
  }]
}

export interface RequestPokemon {
  count: number;
  next: string;
  previus: string;
  results: Pokemon[];
}
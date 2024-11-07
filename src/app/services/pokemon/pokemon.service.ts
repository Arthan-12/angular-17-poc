import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, first, finalize } from 'rxjs';
import { Pokemon } from '../../models/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';
  public pokemon = signal<Pokemon | null>(null);

  constructor(private http: HttpClient) {}

  private getPokemonByName(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.API_URL + '/' + pokemonName);
  }

  public searchPokemon(pokemonName: string) {
    this.getPokemonByName(pokemonName).subscribe({
      next: (res) => {
        this.pokemon.set(res);
      },
      error: () => {},
    });
  }
}

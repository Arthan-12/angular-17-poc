import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.searchPokemon('mew');
  }
}

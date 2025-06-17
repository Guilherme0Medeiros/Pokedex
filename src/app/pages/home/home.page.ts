import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

import { IonicModule } from '@ionic/angular'; 
import { NgFor, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    NgFor,
    TitleCasePipe,
    RouterModule 
  ],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  paginaAtual: number = 0;
  limitePorPagina: number = 6;

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.carregarPokemons();
  }

  carregarPokemons() {
    const offset = this.paginaAtual * this.limitePorPagina;
    this.pokeService.getPokemons(this.limitePorPagina, offset).subscribe((data) => {
      this.pokemons = data;
    });
  }

  proximaPagina() {
    this.paginaAtual++;
    this.carregarPokemons();
  }

  paginaAnterior() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.carregarPokemons();
    }
  }

  openDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgFor, TitleCasePipe, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgFor,
    TitleCasePipe,
    RouterModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  todosPokemons: any[] = [];
  paginaAtual: number = 0;
  limitePorPagina: number = 8;
  busca: string = '';
  paginasVisiveis: number[] = [];
  maxPaginas: number = 0;

  constructor(
    private pokeService: PokemonService,
    private router: Router,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit() {
    this.carregarTodosPokemons();
  }

  carregarTodosPokemons() {
    this.pokeService.getPokemons(1000, 0).subscribe((data) => {
      this.todosPokemons = data;
      this.maxPaginas = Math.ceil(this.todosPokemons.length / this.limitePorPagina) - 1;
      this.atualizarPagina();
    });
  }

  atualizarPagina() {
    const offset = this.paginaAtual * this.limitePorPagina;
    const fim = offset + this.limitePorPagina;
    this.pokemons = this.todosPokemons.slice(offset, fim);
    this.atualizarPaginasVisiveis();
  }

  filtrarPokemons() {
    const termo = this.busca.toLowerCase().trim();

    if (termo === '') {
      this.carregarTodosPokemons();
      return;
    }

    const filtrados = this.todosPokemons.filter(p =>
      p.name.toLowerCase().includes(termo)
    );

    this.pokemons = filtrados.slice(0, this.limitePorPagina);
    this.paginaAtual = 0;
    this.maxPaginas = Math.ceil(filtrados.length / this.limitePorPagina) - 1;
    this.todosPokemons = filtrados;
    this.atualizarPaginasVisiveis();
  }

  proximaPagina() {
    if (this.paginaAtual < this.maxPaginas) {
      this.paginaAtual++;
      this.atualizarPagina();
    }
  }

  paginaAnterior() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.atualizarPagina();
    }
  }

  irParaPagina(pagina: number) {
    this.paginaAtual = pagina;
    this.atualizarPagina();
  }

  atualizarPaginasVisiveis() {
    const total = this.maxPaginas + 1;
    const visiveis = [];

    const inicio = Math.max(0, this.paginaAtual - 2);
    const fim = Math.min(total, inicio + 5);

    for (let i = inicio; i < fim; i++) {
      visiveis.push(i);
    }

    this.paginasVisiveis = visiveis;
  }

  openDetails(name: string) {
    this.router.navigate(['/details', name]);
  }

  isFavorito(nome: string): boolean {
    return this.favoritosService.isFavorito(nome);
  }

  toggleFavorito(nome: string) {
    this.favoritosService.toggleFavorito(nome);
  }
}

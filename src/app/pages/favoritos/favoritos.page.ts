import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class FavoritosPage implements OnInit {
  favoritos: any[] = [];

  constructor(
    private favoritosService: FavoritosService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.carregarFavoritos();
  }

  async carregarFavoritos() {
    const nomes = this.favoritosService.getFavoritos();

    const promessas = nomes.map((nome) =>
      this.pokemonService.getPokemonDetails(nome).toPromise()
    );

    this.favoritos = await Promise.all(promessas);
  }

  removerFavorito(nome: string) {
    this.favoritosService.toggleFavorito(nome); // alterna a marcação
    this.favoritos = this.favoritos.filter(p => p.name !== nome); // remove da exibição
  }

  openDetails(nome: string) {
    window.location.href = `/details/${nome}`;
  }
}

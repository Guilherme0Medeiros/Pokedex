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

    // busca detalhes do pokemon que foi favoritado
    const promessas = nomes.map((nome) =>
      this.pokemonService.getPokemonDetails(nome).toPromise()
    );

    this.favoritos = await Promise.all(promessas);
  }

  openDetails(nome: string) {
    window.location.href = `/details/${nome}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TitleCasePipe],
})
export class DetailsPage implements OnInit {
  pokemon: any = null;
  isLoading = true;
  types: string = '';
  abilities: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      this.pokemonService.getPokemonDetails(name).subscribe((data) => {
        this.pokemon = data;

        // extrai Tipos e habilidades como strings simpless
        this.types = data.types.map((t: any) => t.type.name).join(', ');
        this.abilities = data.abilities
          .map((a: any) => a.ability.name)
          .join(', ');

        this.isLoading = false;
      });
    }
  }

  // retorna se o pokemon atual esta favoritado ou nao
  isFavorito(): boolean {
    return this.favoritosService.isFavorito(this.pokemon?.name);
  }

  // adicionar e remover dos favoritos
  toggleFavorito(): void {
    this.favoritosService.toggleFavorito(this.pokemon?.name);
  }
}

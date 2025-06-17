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

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.pokeService.getPokemons(50, 0).subscribe((data) => {
      this.pokemons = data;
    });
  }

  openDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}

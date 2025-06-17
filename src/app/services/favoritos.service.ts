import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritosKey = 'pokemons_favoritos'; 

  constructor() {}

  // recupera os favoritos Salvos 
  getFavoritos(): string[] {
    const data = localStorage.getItem(this.favoritosKey);
    return data ? JSON.parse(data) : [];
  }

  isFavorito(nome: string): boolean {
    return this.getFavoritos().includes(nome);
  }

  toggleFavorito(nome: string): void {
    const favoritos = this.getFavoritos();
    const index = favoritos.indexOf(nome);

    if (index >= 0) {
      favoritos.splice(index, 1); 
    } else {
      favoritos.push(nome); 
    }

    localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
  }
}

import { TestBed } from '@angular/core/testing';
import { FavoritosService } from './favoritos.service';

describe('FavoritosService', () => {
  let service: FavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritosService);
    localStorage.clear();
  });

  it('deve iniciar com lista vazia', () => {
    expect(service.getFavoritos()).toEqual([]);
  });

  it('deve adicionar um favorito', () => {
    service.toggleFavorito('pikachu');
    expect(service.getFavoritos()).toContain('pikachu');
  });

  it('deve remover um favorito', () => {
    service.toggleFavorito('pikachu');
    service.toggleFavorito('pikachu');
    expect(service.getFavoritos()).not.toContain('pikachu');
  });

  it('deve identificar se um nome é favorito', () => {
    service.toggleFavorito('bulbasaur');
    expect(service.isFavorito('bulbasaur')).toBeTrue();
    expect(service.isFavorito('charmander')).toBeFalse();
  });
});

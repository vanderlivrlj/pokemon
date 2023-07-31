import {Component} from '@angular/core';
import {Pokemon} from "../../model/Pokemon";
import {Tipo} from "../../model/Tipo";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  favorito: boolean = false;

  public pokemons: Pokemon[] = [
    {
      imagem: 'https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png',
      numero: 123,
      nome: 'Bulbasaur',
      tipo: [
        Tipo.Poison,
        Tipo.Grass
      ]
    }
  ]

  constructor() {
  }

  ngOnit(){

  }

  favoritado(){
    this.favorito = !this.favorito;
  }

}

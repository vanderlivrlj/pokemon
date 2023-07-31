import {Tipo} from "./Tipo";

export interface Pokemon {
  imagem: string,
  numero: number,
  nome: string,
  tipo: Tipo[];
}

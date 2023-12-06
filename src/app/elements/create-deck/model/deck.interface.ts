import { ICard } from "src/app/shared/interfaces/card";

export interface DeckCards {
  id: number,
  nome: string,
  cards: ICard[]
}

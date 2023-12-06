import { ICard } from "src/app/shared/interfaces/card";

export interface DeckCards {
  id: number,
  name: string,
  cards: ICard[]
}

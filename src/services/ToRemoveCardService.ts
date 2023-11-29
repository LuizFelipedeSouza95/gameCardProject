import axios from "axios";

interface DeckProps {
  deckId: string;
  numCard: number;
}

export class ToRemoveCardService {
  async execute({ deckId, numCard }: DeckProps) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numCard}`;

    const resultCartas = await axios.get(url);
    return resultCartas.data;
  }
}

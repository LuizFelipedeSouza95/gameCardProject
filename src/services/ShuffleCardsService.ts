import axios from "axios";

interface DeckProps {
  deckId: string;
}

export class ShuffleCardsService {
  async execute({ deckId }: DeckProps) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=true`;
    const resultEmbCartas = await axios.get(url);
    return resultEmbCartas.data;
  }
}

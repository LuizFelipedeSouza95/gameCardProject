import axios from "axios";

interface DeckProps {
  deckId: string;
}

export class ShuffleStackService {
  async execute({ deckId }: DeckProps) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/pile/descarte/shuffle/`;
    const resultEmbCartas = await axios.get(url);
    return resultEmbCartas.data;
  }
}

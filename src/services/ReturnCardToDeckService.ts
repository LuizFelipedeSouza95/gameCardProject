import axios from "axios";

interface DeckProps {
  deckId: string;
}

export class ReturnCardToDeckService {
  async execute({ deckId }: DeckProps) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/return/`;

    const resultCartas = await axios.get(url);
    return resultCartas.data;
  }
}

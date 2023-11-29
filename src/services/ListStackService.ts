import axios from "axios";

interface DeckProps {
  deckId: string;
}

export class ListStackService {
  async execute({ deckId }: DeckProps) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/pile/descarte/list/`;
    const response = await axios.get(url);
    return response.data;
  }
}

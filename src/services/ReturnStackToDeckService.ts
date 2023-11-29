import axios from "axios";

interface DeckProps {
  deckId: string;
}

export class ReturnStackToDeckService {
  async execute({ deckId }: DeckProps) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/pile/descarte/return/`;
    const result = await axios.get(url);
    return result.data;
  }
}

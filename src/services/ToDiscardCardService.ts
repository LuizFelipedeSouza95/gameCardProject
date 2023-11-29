import axios from "axios";

interface DeckProps {
  deckId: string;
  cardId: string;
}

export class ToDiscardCardService {
  async execute({ deckId, cardId }: DeckProps) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/pile/descarte/add/?cards=${cardId}`;
    const result = await axios.get(url);
    return result.data;
  }
}

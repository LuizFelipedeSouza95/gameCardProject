import axios from "axios";

export class NewDeckService {
  async execute() {
    const url = `https://deckofcardsapi.com/api/deck/new/`;
    const response = await axios.get(url);
    return response.data;
  }
}

import { Request, Response } from "express";
import { ShuffleCardsService } from "../services/ShuffleCardsService";

export class ShuffleCardsController {
  async handle(req: Request, res: Response) {
    const deckId = req.query.deckId as string;

    if (!deckId) {
      return res.status(400).json({ error: "Missing deckId" });
    }

    const shuffleCardsService = new ShuffleCardsService();
    const DeckShuffle = await shuffleCardsService.execute({ deckId });

    return res.status(200).json(DeckShuffle);
  }
}

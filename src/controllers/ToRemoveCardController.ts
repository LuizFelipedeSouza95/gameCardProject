import { Request, Response } from "express";
import { ToRemoveCardService } from "../services/ToRemoveCardService";

export class ToRemoveCardController {
  async handle(req: Request, res: Response) {
    const { deckId, numCard } = req.body;

    if (!numCard || !deckId) {
      return res.status(400).json({ error: "Missing numCard" });
    }

    const toRemoveCardService = new ToRemoveCardService();
    const cards = await toRemoveCardService.execute({ deckId, numCard });

    res.status(200).json(cards);
  }
}

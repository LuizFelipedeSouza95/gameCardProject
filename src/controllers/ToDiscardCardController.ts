import { Request, Response } from "express";
import { ToDiscardCardService } from "../services/ToDiscardCardService";

export class ToDiscardCardController {
  async handle(req: Request, res: Response) {
    const deckId = req.query.deckId as string;
    const cardId = req.query.cardId as string;

    if (!deckId || !cardId) {
      return res.status(400).json({ error: "Missing deck_id" });
    }

    const toDiscardCardService = new ToDiscardCardService();
    const DeckDiscard = await toDiscardCardService.execute({ deckId, cardId });

    if (!DeckDiscard) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(DeckDiscard);
  }
}

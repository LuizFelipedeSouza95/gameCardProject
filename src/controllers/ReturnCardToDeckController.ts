import { Request, Response } from "express";
import { ReturnCardToDeckService } from "../services/ReturnCardToDeckService";

export class ReturnCardToDeckController {
  async handle(req: Request, res: Response) {
    const deckId = req.query.deckId as string;

    if (!deckId) {
      return res.status(400).json({ error: "Missing numCard" });
    }

    const toRemoveCardService = new ReturnCardToDeckService();
    const cards = await toRemoveCardService.execute({ deckId });

    res.status(200).json(cards);
  }
}

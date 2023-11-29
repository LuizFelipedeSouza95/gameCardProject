import { Request, Response } from "express";
import { ReturnStackToDeckService } from "../services/ReturnStackToDeckService";

export class ReturnStackToDeckController {
  async handle(req: Request, res: Response) {
    const deckId = req.query.deckId as string;

    const toRemoveCardService = new ReturnStackToDeckService();
    const cards = await toRemoveCardService.execute({
      deckId,
    });

    res.status(200).json(cards);
  }
}

import { Request, Response } from "express";
import { ListStackService } from "../services/ListStackService";

export class ListStackController {
  async handle(req: Request, res: Response) {
    const deckId = req.query.deckId as string;

    const createUserService = new ListStackService();
    const newDeck = await createUserService.execute({
      deckId,
    });

    if (!newDeck) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(newDeck);
  }
}

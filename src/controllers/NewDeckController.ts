import { Request, Response } from "express";
import { NewDeckService } from "../services/NewDeckService";

export class NewDeckController {
  async handle(req: Request, res: Response) {
    const createUserService = new NewDeckService();
    const newDeck = await createUserService.execute();

    if (!newDeck) {
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(201).json(newDeck);
  }
}

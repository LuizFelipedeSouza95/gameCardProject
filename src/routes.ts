import { Router } from "express";

import { NewDeckController } from "./controllers/NewDeckController";
import { ShuffleCardsController } from "./controllers/ShuffleCardsController";
import { ToRemoveCardController } from "./controllers/ToRemoveCardController";
import { ToDiscardCardController } from "./controllers/ToDiscardCardController";
import { ReturnCardToDeckController } from "./controllers/ReturnCardToDeckController";
import { ReturnStackToDeckController } from "./controllers/ReturnStackToDeckController";
import { ShuffleStackController } from "./controllers/ShuffleStackController";
import { ListStackController } from "./controllers/ListStackController";

const router = Router();

router.get("/new-deck", new NewDeckController().handle);
router.get("/shuffle-cards", new ShuffleCardsController().handle);
router.get("/remove-card", new ToRemoveCardController().handle);
router.get("/discard-card", new ToDiscardCardController().handle);
router.get("/return-card", new ReturnCardToDeckController().handle);
router.get("/return-stack", new ReturnStackToDeckController().handle);
router.get("/shuffle-stack", new ShuffleStackController().handle);
router.get("/list-stack", new ListStackController().handle);

export { router };

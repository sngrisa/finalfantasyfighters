import { Response, Router } from "express";
import fighterRoutes from './fighters.routes';

const router = Router();

router.use("/fighters", fighterRoutes);
router.get("/ping", (_req, res: Response) => {
    res.status(200).json("pong");
})

export default router;
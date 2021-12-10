import express, { Request, Response } from "express";
import usercontroller from "./controller/usercontroller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("oio");
});

router.post("/user", usercontroller.create);

router.get("/users", usercontroller.findAll);

router.get("/user/:userId", usercontroller.findOne);

router.put("/user/:userId", usercontroller.update);

router.delete("/user/:userId", usercontroller.destoy);

export { router };

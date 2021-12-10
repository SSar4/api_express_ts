import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController {
  async create(req: Request, res: Response) {
    const { email, nickname, pass } = req.body;
    const user = await UserModel.create({
      email,
      nickname,
      pass,
    });
    res.status(201).json(user);
  }
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const user = await UserModel.findOne({
        where: { id: userId },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(204).json();
    }
  }
  async update(req: Request, res: Response) {
    const { userId } = req.params;
    const { email, nickname, pass } = req.body;
    await UserModel.update(
      { email, nickname, pass },
      {
        where: { id: userId },
      }
    );
    return res.status(204).send();
  }
  async destoy(req: Request, res: Response) {
    const { userId } = req.params;
    await UserModel.destroy({
      where: { id: userId },
    });
    return res.status(204).send();
  }
}

export default new UserController();

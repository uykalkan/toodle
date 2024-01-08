import type { NextApiRequest, NextApiResponse } from "next";
import todoService from "@/services/server/todoService";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const todos = await todoService.getAll();
  res.status(200).json(todos);
});

router.post(async (req, res) => {
  await todoService.create(req.body);
  const todos = await todoService.getAll();
  res.status(200).json(todos);
});

router.delete(async (req, res) => {
  await todoService.deleteOne(Number(req.query.id));
  const todos = await todoService.getAll();
  res.status(200).json(todos);
});

router.put(async (req, res) => {
  await todoService.changeStatus(Number(req.body.id), req.body.completed);
  const todos = await todoService.getAll();
  res.status(200).json(todos);
});

export default router.handler();

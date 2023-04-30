import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllComments = async (req, res) => {
  try {
    const comment = await prisma.comment.findMany();
    if (comment.length >= 1) {
      res.status(200).json(comment);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getOneComment = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: +id,
      },
    });
    if (comment && Object.keys(comment).length > 0) {
      res.status(200).json(comment);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const createComment = async (req, res) => {
  try {
    const newComment = await prisma.comment.create({
      data: req.body,
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comment.update({
      where: {
        id: +id,
      },
      data: req.body,
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.comment.delete({
      where: {
        id: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

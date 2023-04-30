import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async (req, res) => {
  try {
    const post = await prisma.post.findMany({
      select: {
        id: true,
        name: true,
        contenido: true,
        comment: {
          select: {
            id: true,
            post_id: true,
            text: true,
          },
        },
      },
    });
    if (post.length >= 1) {
      res.status(200).json(post);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getOnePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: +id,
      },
    });
    if (post && Object.keys(post).length > 0) {
      res.status(200).json(post);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await prisma.post.create({
      data: req.body,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.update({
      where: {
        id: +id,
      },
      data: req.body,
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.post.delete({
      where: {
        id: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

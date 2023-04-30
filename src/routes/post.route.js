import express from "express";
import { createPost } from "../controllers/post.controller.js";
import { getAllPosts } from "../controllers/post.controller.js";
import { getOnePost } from "../controllers/post.controller.js";
import { updatePost } from "../controllers/post.controller.js";
import { deletePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getAllPosts);

//get post by id
router.get("/:id", getOnePost);

//Crear Postes
router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;

import express from "express";
import { createComment } from "../controllers/comment.controller.js";
import { getAllComments } from "../controllers/comment.controller.js";
import { getOneComment } from "../controllers/comment.controller.js";
import { updateComment } from "../controllers/comment.controller.js";
import { deleteComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/", getAllComments);
//get post by id
router.get("/:id", getOneComment);

//Crear Postes
router.post("/", createComment);

router.put("/:id", updateComment);

router.delete("/:id", deleteComment);

export default router;

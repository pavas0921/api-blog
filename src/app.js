import express from "express";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("<hi>Hello<h1/>");
});

app.listen(PORT, () => {
  console.log("server initialized");
});

//Middleware
app.use(express.json());
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

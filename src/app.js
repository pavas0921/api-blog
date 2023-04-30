import express from "express";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ message: "Hello from railway" });
});

app.listen(PORT, () => {
  console.log("server initialized");
});

//Middleware
app.use(express.json());
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

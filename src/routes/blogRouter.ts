import express from "express";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/blogController";
const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/", createBlog);
blogRouter.delete("/", deleteBlog);
blogRouter.put("/", updateBlog);

export default blogRouter;

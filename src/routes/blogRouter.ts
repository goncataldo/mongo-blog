const express = require("express");
const blogRouter = express.Router();
const { getBlogs, createBlog, deleteBlog, updateBlog } = require("../controllers/blogController");

blogRouter.get("/", getBlogs);
blogRouter.post("/", createBlog);
blogRouter.delete("/", deleteBlog)
blogRouter.put("/", updateBlog)

module.exports = blogRouter;




import { Request, Response } from "express";
import { client } from "../config/database";
import { blogs } from "../models/blogModel";

export const getBlogs = async (_req: Request, res: Response) => {
  try {
    await client.connect();
    const data = await blogs.find().toArray();
    res.json({ message: "Successful", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Something went wrong" });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const data = await blogs.insertOne(req.body);
    res.json({ message: "Successful", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Something went wrong" });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const data = await blogs.deleteOne(req.body);
    res.json({ message: "Successful", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Something went wrong" });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const data = await blogs.updateOne(req.body.filter, req.body.new);
    res.json({ message: "Successful", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Something went wrong" });
  }
};

import express from "express";
import Project from "../models/Project.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all projects (public)
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add project (protected)
router.post("/", verifyToken, async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

export default router;

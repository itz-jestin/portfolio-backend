import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  tech: String,
  description: String,
  github: String,
  live: String
});

export default mongoose.model("Project", projectSchema);

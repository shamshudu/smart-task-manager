import express from "express";
import OpenAI from "openai";

const router = express.Router();

// Use the env key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

let tasks = [];

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful task planner." },
        { role: "user", content: `Break this task into subtasks: ${title} - ${description}` }
      ]
    });

    const subtasksText = aiResponse.choices[0].message.content;
    const subtasks = subtasksText.split("\n").filter(Boolean);

    const task = { id: tasks.length + 1, title, description, subtasks, status: "pending" };
    tasks.push(task);

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating task" });
  }
});

router.get("/", (req, res) => res.json(tasks));

export default router;

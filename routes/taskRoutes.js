import express from "express";
import OpenAI from "openai";

const router = express.Router();

// Initialize OpenAI with environment key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

let tasks = [];

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Updated AI prompt to include timelines & dependencies
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "You are an intelligent project planner who breaks big goals into clear, time-based subtasks with dependencies." 
        },
        { 
          role: "user", 
          content: `Break down the following goal into actionable subtasks. 
          For each subtask, include:
          1. Subtask name
          2. Short description
          3. Estimated timeline (in days or weeks)
          4. Dependencies (if any)
          
          Goal: ${title} - ${description}`
        }
      ]
    });

    const subtasksText = aiResponse.choices[0].message.content;
    const subtasks = subtasksText.split("\n").filter(Boolean);

    const task = { 
      id: tasks.length + 1, 
      title, 
      description, 
      subtasks, 
      status: "pending" 
    };
    
    tasks.push(task);

    res.status(201).json(task);
  } catch (error) {
    console.error("Error from OpenAI:", error);
    res.status(500).json({ message: "Error creating task" });
  }
});

router.get("/", (req, res) => res.json(tasks));

export default router;


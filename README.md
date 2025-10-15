Smart Task Planner

Objective:
Smart Task Planner helps users transform broad goals into clear, actionable tasks with timelines and dependencies — powered by AI reasoning using the OpenAI GPT model.

What It Does

This app takes a goal description (e.g., “Launch a website in 2 weeks”) and automatically breaks it into:

Subtasks with titles and descriptions

Estimated timelines for each subtask

Defined dependencies between tasks

Example Output:

1. Define Website Requirements – 3 days
2. Create Wireframes – 5 days (depends on #1)
3. Build and Test Website – 7 days (depends on #2)
4. Launch Website – 1 day (depends on #3)

Technical Overview

Backend: Node.js + Express
AI Model: OpenAI GPT (via API)
Route: /tasks
Environment Variables:
Create a .env file and add:

OPENAI_API_KEY=your_api_key_here
PORT=5001


Run Server:

npm install
node server.js


Test API (example):

curl -X POST http://localhost:5001/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Launch new website", "description": "Build and deploy within 2 weeks"}'

Future Scope

Add a frontend to visualize task timelines

Store user plans in a database

Integrate a progress tracker and reminder system

Deliverables

GitHub repository with backend code

README (this file)

Working API that demonstrates AI-based task breakdown

Smart Task Planner — helping users turn their goals into structured, achievable plans.

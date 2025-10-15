Smart Task Planner

Smart Task Planner is a modern task management application that leverages AI to help users break down their goals into actionable subtasks. Built with Node.js, Express, and OpenAI GPT API, this project provides an intelligent backend service for creating, organizing, and tracking tasks.

Features

AI-Powered Task Breakdown: Users can create a task with a title and description, and the system automatically generates subtasks using OpenAI’s GPT model.

Task Management: Users can view all tasks, along with their subtasks and current status.

Simple API: Provides endpoints to create new tasks (POST /tasks) and fetch all tasks (GET /tasks).

Persistent Storage Ready: Currently, tasks are stored in memory, but the system can easily be integrated with a database for permanent storage.

Environment Variable Security: Sensitive keys like the OpenAI API key are securely stored in .env and not committed to GitHub.

Technologies Used

Node.js & Express: For building the server and API endpoints.

OpenAI GPT API: To generate subtasks intelligently based on user input.

JavaScript (ES6 Modules): Modern syntax for better maintainability.

Git & GitHub: Version control and remote repository management.

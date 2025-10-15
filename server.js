import 'dotenv/config';  // This automatically loads .env BEFORE anything else

import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

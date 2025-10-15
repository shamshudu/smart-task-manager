import dotenv from "dotenv";

dotenv.config();  // load .env

console.log("API Key:", process.env.OPENAI_API_KEY);
console.log("PORT:", process.env.PORT);


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// AI Route
app.post("/generate", async (req, res) => {
  const { role, skills, experience } = req.body;

  try {
    const prompt = `Generate 5 professional resume bullet points for a role as ${role} using the following skills and experience: ${skills}, ${experience}`;
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.data.choices[0].message.content;
    res.json({ result });
  } catch (error) {
    console.error("Error generating AI content:", error.message);
    res.status(500).json({ error: "AI generation failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require('dotenv').config();
const axios = require("axios");

const callGemini = async (query) => {
  
   const apiKey = process.env.GEMINI_API_KEY;
  const model = "gemini-3.1-flash-lite-preview";
  // const model = "gemini-3-flash-preview";

const prompt = `
User request: ${query}

Give the answer in SIMPLE TEXT only.

Format:

Formula: < full formula>

Explanation: <short explanation>

Example: <example with numbers>

Rules:
- Do NOT use markdown
- Do NOT use headings
- Do NOT use $$ or latex
- Keep explanation short
`;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 250
        }
      }
    );

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";

  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    throw new Error("AI service failed");
  }
};

module.exports = callGemini;
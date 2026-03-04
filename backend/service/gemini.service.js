const axios = require("axios");

const callGemini = async (prompt) => {
 const apikey = "AIzaSyDfwjcUPNtIa_RyEK4cYVY-8Vm15VidNps";
 const model = "gemini-2.5-flash" ;
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apikey}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 120
        }
      }
    );

    return response.data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    throw new Error("AI service failed");
  }
};

module.exports = callGemini;
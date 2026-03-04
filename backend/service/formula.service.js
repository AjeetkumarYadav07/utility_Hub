const callGemini = require("./gemini.service");
const buildFormulaPrompt = require("../utils/buildPrompt");

const generateFormula = async (query) => {
  const prompt = buildFormulaPrompt(query);

  const rawText = await callGemini(prompt);

  // Parse structured output
  const formulaMatch = rawText.match(/Formula:\s*(.*)/);
  const explanationMatch = rawText.match(/Explanation:\s*(.*)/);
  const exampleMatch = rawText.match(/Example:\s*(.*)/);

  return {
    formula: formulaMatch ? formulaMatch[1].trim() : "",
    explanation: explanationMatch ? explanationMatch[1].trim() : "",
    example: exampleMatch ? exampleMatch[1].trim() : ""
  };
};

module.exports = generateFormula;
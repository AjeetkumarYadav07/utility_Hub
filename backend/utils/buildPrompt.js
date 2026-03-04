const buildFormulaPrompt = (userQuery) => {
  return `
User request: ${userQuery}

Respond strictly in this format:

Formula: <short formula only>

Explanation: <max 50 words>

Example: <one short numeric example>

Rules:
- No extra text
- No introduction
- No detailed explanation
- Keep response under 60 words
`;
};

module.exports = buildFormulaPrompt;



// utils/buildPrompt.js
// const buildFormulaPrompt = (userQuery) => {
//   return `
// You are a math formula assistant.

// User request: ${userQuery}

// Respond exactly in this format with short but meaningful content:

// Formula: <formula, include variables, do not abbreviate>
// Explanation: <1-2 short sentence explaining formula>
// Example: <one numeric example with calculation, 1-2 lines max>

// Rules:
// - No extra introduction or text
// - Keep everything concise
// - Do not exceed 50 words total
// - Each field must be on its own line
// `;
// };

// module.exports = buildFormulaPrompt;
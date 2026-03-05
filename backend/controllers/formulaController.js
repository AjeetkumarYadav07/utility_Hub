

const callGemini = require("../service/gemini.service");

const handleGenerateFormula = async (req, res) => {
  try {
    const { query } = req.body;

    const aiText = await callGemini(query);

    return res.status(200).json({
      success: true,
      data: aiText
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate formula"
    });
  }
};

module.exports = {
  handleGenerateFormula
};
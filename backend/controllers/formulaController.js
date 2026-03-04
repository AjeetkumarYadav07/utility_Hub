// const generateFormula = require("../services/formula.service");
const  generateFormula = require("../service/formula.service");  

const handleGenerateFormula = async (req, res) => {
  try {
    const { query } = req.body;

    const result = await generateFormula(query);

    return res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate formula"
    });
  }
};

module.exports = {
  handleGenerateFormula
};
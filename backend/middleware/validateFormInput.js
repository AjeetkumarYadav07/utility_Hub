const validateFormulaInput = (req, res, next) => {
  let { query } = req.body;

  if (!query || typeof query !== "string") {
    return res.status(400).json({
      success: false,
      message: "Query is required"
    });
  }

  query = query.trim();

  if (query.length === 0 || query.length > 40) {
    return res.status(400).json({
      success: false,
      message: "Query must be between 1 and 40 characters"
    });
  }

  // Block paragraphs or suspicious long prompts
  if (query.split(" ").length > 8) {
    return res.status(400).json({
      success: false,
      message: "Query too long. Please enter short formula name."
    });
  }

  req.body.query = query;
  next();
};

module.exports = validateFormulaInput;
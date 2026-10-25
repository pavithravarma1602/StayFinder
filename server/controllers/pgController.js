const PG = require("../models/PG");

const getAllPGs = async (req, res) => {
  try {
    const pgs = await PG.find({ isAvailable: true })
      .populate("owner", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: pgs.length,
      data: pgs,
    });
  } catch (error) {
    console.error("Error fetching PG listings:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch PG listings",
    });
  }
};

module.exports = { getAllPGs };

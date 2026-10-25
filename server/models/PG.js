const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      default: "",
    },

    rent: {
      type: Number,
      required: true,
    },

    roomType: {
      type: String,
      enum: ["Single", "Double", "Triple", "Shared"],
      default: "Single",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Unisex"],
      default: "Unisex",
    },

    facilities: {
      type: [String],
      default: [],
    },

    images: {
      type: [String],
      default: [],
    },

    contactPhone: {
      type: String,
      default: "",
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviewsCount: {
      type: Number,
      default: 0,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PG", pgSchema);
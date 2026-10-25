require("dotenv").config();

const mongoose = require("mongoose");
const User = require("./models/User");
const PG = require("./models/PG");

const samplePGs = [
  {
    title: "DSU Student Stay",
    description:
      "Demo PG listing for students looking for budget-friendly accommodation near campus.",
    location: "Harohalli, Bengaluru",
    address: "Sample address, Harohalli",
    rent: 7500,
    roomType: "Double",
    gender: "Unisex",
    facilities: ["Wi-Fi", "Food", "Laundry", "24/7 Water"],
    images: ["/pg-room.jpeg"],
    contactPhone: "",
    rating: 4.2,
    reviewsCount: 8,
    isAvailable: true,
  },
  {
    title: "Harohalli Comfort PG",
    description:
      "Demo shared accommodation with essential facilities for students and working professionals.",
    location: "Harohalli, Bengaluru",
    address: "Sample address, Harohalli",
    rent: 8500,
    roomType: "Triple",
    gender: "Unisex",
    facilities: ["Wi-Fi", "Food", "Parking"],
    images: ["/pg-room.jpeg"],
    contactPhone: "",
    rating: 4.0,
    reviewsCount: 5,
    isAvailable: true,
  },
  {
    title: "Green Nest PG",
    description:
      "Demo budget accommodation with basic facilities.",
    location: "Harohalli, Bengaluru",
    address: "Sample address, Harohalli",
    rent: 6500,
    roomType: "Shared",
    gender: "Female",
    facilities: ["Wi-Fi", "Laundry", "Water"],
    images: ["/pg-room.jpeg"],
    contactPhone: "",
    rating: 4.1,
    reviewsCount: 6,
    isAvailable: true,
  },
  {
    title: "Campus View PG",
    description:
      "Demo accommodation listing for students seeking a convenient place to stay.",
    location: "Harohalli, Bengaluru",
    address: "Sample address, Harohalli",
    rent: 9000,
    roomType: "Single",
    gender: "Unisex",
    facilities: ["Wi-Fi", "Food", "Laundry", "Parking"],
    images: ["/pg-room.jpeg"],
    contactPhone: "",
    rating: 4.3,
    reviewsCount: 10,
    isAvailable: true,
  },
];

async function seedPGs() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from your .env file");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected.");

    let owner = await User.findOne({ role: "owner" });

    if (!owner) {
      owner = await User.findOne();

      if (!owner) {
        throw new Error(
          "No user exists. Register an account on StayFinder first, then try again."
        );
      }

      owner.role = "owner";
      await owner.save();
    }

    // Safe to rerun: remove only records created by this demo seed.
    await PG.deleteMany({
      owner: owner._id,
      title: { $in: samplePGs.map((pg) => pg.title) },
      address: "Sample address, Harohalli",
    });

    await PG.insertMany(
      samplePGs.map((pg) => ({
        ...pg,
        owner: owner._id,
      }))
    );

    console.log(`Successfully added ${samplePGs.length} demo PG listings.`);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedPGs();

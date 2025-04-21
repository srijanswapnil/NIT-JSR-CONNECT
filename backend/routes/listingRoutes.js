const express = require("express");
const router = express.Router();
const Listing = require("../Model/listing");
const multer = require("multer");
const protect = require("../middleware/authMiddleware"); // must export a function

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// public: get all listings
router.get("/", async (req, res) => {
  const listings = await Listing.find().populate("createdBy", "name email");
  res.json(listings);
});

// protected: create listing
router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    const listing = await Listing.create({
      ...req.body,
      imageUrl: req.file?.path || null,
      createdBy: req.user.id,
    });
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
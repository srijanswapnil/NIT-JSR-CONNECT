import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

const insightSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    content: String,
    likes: { type: Number, default: 0 },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Insight = mongoose.model("Insight", insightSchema);

export default Insight;

import express from 'express';
import Insight from '../models/Insight.js';
import { protect } from '../middleware/authMiddleware.js'; // only if you're using JWT

const router = express.Router();

// POST comment to insight
router.post('/:id/comment', protect, async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  if (!text) return res.status(400).json({ message: 'Comment text is required' });

  try {
    const insight = await Insight.findById(id);
    if (!insight) return res.status(404).json({ message: 'Insight not found' });

    const comment = {
      text,
      user: {
        id: req.user._id,
        name: req.user.name
      }
    };

    insight.comments.unshift(comment); // add comment to top
    await insight.save();

    res.status(201).json({ message: 'Comment added', comment });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;

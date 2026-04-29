const express = require('express');
const router = express.Router();
const db = require('../db');

const TOTAL_LESSONS = 10;

// POST /api/progress — save a quiz score
router.post('/', (req, res) => {
  const { user_id, lesson_id, score } = req.body;
  if (!user_id || !lesson_id || score === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const insert = db.prepare('INSERT INTO progress (user_id, lesson_id, score) VALUES (?, ?, ?)');
  const result = insert.run(user_id, lesson_id, score);
  res.status(201).json({ id: result.lastInsertRowid });
});

// GET /api/progress/:userId — returns { completed, total }
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const rows = db.prepare('SELECT COUNT(DISTINCT lesson_id) as completed FROM progress WHERE user_id = ?').get(userId);
  res.json({ completed: rows.completed, total: TOTAL_LESSONS });
});

module.exports = router;
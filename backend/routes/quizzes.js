const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/quizzes/:lessonId
router.get('/:lessonId', (req, res) => {
  const { lessonId } = req.params;
  const quiz = db.prepare('SELECT * FROM quizzes WHERE lesson_id = ?').get(lessonId);
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

  res.json(JSON.parse(quiz.questions));
});

module.exports = router;
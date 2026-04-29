const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/modules — return all modules
router.get('/', (req, res) => {
  const modules = db.prepare('SELECT * FROM modules').all();
  res.json(modules);
});

// GET /api/modules/:moduleId — return lessons within a module
router.get('/:moduleId', (req, res) => {
  const { moduleId } = req.params;
  const module = db.prepare('SELECT * FROM modules WHERE id = ?').get(moduleId);
  if (!module) return res.status(404).json({ error: 'Module not found' });

  const lessons = db.prepare('SELECT * FROM lessons WHERE module_id = ?').all(moduleId);
  const lessonsWithParsed = lessons.map(lesson => ({
    ...lesson,
    content: JSON.parse(lesson.content),
    fun_facts: JSON.parse(lesson.fun_facts)
  }));

  res.json({ module, lessons: lessonsWithParsed });
});

module.exports = router;
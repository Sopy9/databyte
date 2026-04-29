const db = require('./db');

db.exec(`
  DELETE FROM quizzes;
  DELETE FROM lessons;
  DELETE FROM modules;
`);

const insertModule = db.prepare('INSERT INTO modules (title, lessons) VALUES (?, ?)');
const mod1 = insertModule.run('Module 1', '0-3');
const mod2 = insertModule.run('Module 2', '4-6');
const mod3 = insertModule.run('Module 3', '7-9');

const insertLesson = db.prepare('INSERT INTO lessons (module_id, title, content, fun_facts) VALUES (?, ?, ?, ?)');

const lesson0 = insertLesson.run(
  mod1.lastInsertRowid,
  'What is Data Science?',
  JSON.stringify([
    { heading: 'What is Data Science?', body: 'Data science is the practice of extracting meaning from data. It combines statistics, programming, and domain knowledge to answer questions, find patterns, and make decisions.' },
    { heading: 'Why is it important?', body: 'Data science powers the technology we use every day. Netflix recommendations, Spotify playlists, Instagram feeds — all driven by data.' },
    { heading: 'What will you learn?', body: 'In this module you\'ll get a high-level overview of what data science is, why it matters, and what tools data scientists use.' }
  ]),
  JSON.stringify([
    "The term 'data scientist' was coined in 2008 — it's one of the newest major job titles in tech!",
    "Every day, the world generates around 2.5 quintillion bytes of data.",
    "The average data scientist spends about 80% of their time cleaning data."
  ])
);

const lesson1 = insertLesson.run(
  mod1.lastInsertRowid,
  'Python Basics',
  JSON.stringify([
    { heading: 'Why Python?', body: 'Python is the most popular language for data science because of its simple syntax and powerful libraries like NumPy, Pandas, and Matplotlib.' },
    { heading: 'Variables and Types', body: 'In Python, you can store data in variables. Common types include integers, floats, strings, and booleans.' },
    { heading: 'Lists and Loops', body: 'Lists let you store multiple values. Loops let you iterate over them.' }
  ]),
  JSON.stringify([
    "Python was named after Monty Python, not the snake!",
    "Python is currently the #1 most popular programming language in the world.",
    "Guido van Rossum created Python in 1991 as a hobby project over Christmas break."
  ])
);

const insertQuiz = db.prepare('INSERT INTO quizzes (lesson_id, questions) VALUES (?, ?)');

insertQuiz.run(
  lesson0.lastInsertRowid,
  JSON.stringify([
    {
      id: 1,
      question: 'What does data science combine to extract meaning from data?',
      answers: [
        { label: 'A) Design, marketing, and finance', correct: false },
        { label: 'B) Statistics, programming, and domain knowledge', correct: true },
        { label: 'C) Biology, chemistry, and physics', correct: false },
        { label: 'D) Writing, research, and journalism', correct: false }
      ]
    },
    {
      id: 2,
      question: 'Which of the following is an example of data science in the real world?',
      answers: [
        { label: 'A) Writing a novel', correct: false },
        { label: 'B) Painting a portrait', correct: false },
        { label: 'C) Netflix recommending your next show', correct: true },
        { label: 'D) Baking a cake', correct: false }
      ]
    },
    {
      id: 3,
      question: 'What is the correct order of the basic data science workflow?',
      answers: [
        { label: 'A) Analyze → Collect → Visualize → Clean', correct: false },
        { label: 'B) Visualize → Clean → Collect → Analyze', correct: false },
        { label: 'C) Collect → Analyze → Clean → Visualize', correct: false },
        { label: 'D) Collect → Clean → Analyze → Visualize', correct: true }
      ]
    }
  ])
);

insertQuiz.run(
  lesson1.lastInsertRowid,
  JSON.stringify([
    {
      id: 1,
      question: 'Why is Python popular for data science?',
      answers: [
        { label: 'A) It is the fastest language', correct: false },
        { label: 'B) It has simple syntax and powerful libraries', correct: true },
        { label: 'C) It was invented at Google', correct: false },
        { label: 'D) It only works for data science', correct: false }
      ]
    },
    {
      id: 2,
      question: 'Which of these is NOT a common Python data type?',
      answers: [
        { label: 'A) Integer', correct: false },
        { label: 'B) Float', correct: false },
        { label: 'C) Matrix', correct: true },
        { label: 'D) Boolean', correct: false }
      ]
    }
  ])
);

console.log('Database seeded successfully!');
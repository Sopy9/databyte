const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const modulesRouter = require('./routes/modules');
const quizzesRouter = require('./routes/quizzes');
const progressRouter = require('./routes/progress');

app.use('/api/modules', modulesRouter);
app.use('/api/quizzes', quizzesRouter);
app.use('/api/progress', progressRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Databyte backend running on http://localhost:${PORT}`);
});
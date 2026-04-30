import { useState } from 'react';
import { supabase } from '../supabaseClient';

function Quizzes() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Q1. What does data science combine to extract meaning from data?",
      answers: [
        { label: "A) Design, marketing, and finance", correct: false }, 
        { label: "B) Statistics, programming, and domain knowledge", correct: true },
        { label: "C) Biology, chemistry, and physics", correct: false },
        { label: "D) Writing, research, and journalism", correct: false },
      ]
    },
    {
      id: 2, 
      question: "Q2. Which of the following is an example of data science in the real world?",
      answers: [
        { label: "A) Writing a novel", correct: false },
        { label: "B) Painting a portrait", correct: false },
        { label: "C) Netflix recommending your next show", correct: true },
        { label: "D) Baking a cake", correct: false },
      ]
    }, 
    {
      id: 3, 
      question: "Q3. What is the correct order of the basic data science workflow?", 
      answers: [
        { label: "A) Analyze → Collect → Visualize → Clean", correct: false },
        { label: "B) Visualize → Clean → Collect → Analyze", correct: false },
        { label: "C) Collect → Analyze → Clean → Visualize", correct: false },
        { label: "D) Collect → Clean → Analyze → Visualize", correct: true },
      ]
    },
  ];

  function handleSelect(questionId, answer) {
    if (submitted) return;
    setSelected({ ...selected, [questionId]: answer });
  }

  function getColor(questionId, answer) {
    if (!submitted) {
      if (selected[questionId]?.label === answer.label) return '#ccc';
      return '';
    }
    if (selected[questionId]?.label === answer.label) {
      return answer.correct ? 'green' : 'red';
    }
    return '';
  }

  async function handleSubmit() {
    const score = questions.filter(q => selected[q.id]?.correct).length;
    const { data } = await supabase.auth.getSession();
    const userId = data?.session?.user?.id;

    if (userId) {
      await fetch('http://localhost:4000/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, lesson_id: 1, score })
      });
    }

    setSubmitted(true);
  }

  return (
    <div className="container">
      <h1>Quizzes</h1>
      <h4>Lesson 0</h4>

      <div>
        {questions.map((q) => (
          <div key={q.id}>
            <p>{q.question}</p>
            <div>
              {q.answers.map((answer) => (
                <button
                  key={answer.label}
                  onClick={() => handleSelect(q.id, answer)}
                  style={{ backgroundColor: getColor(q.id, answer) }}
                >
                  {answer.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!submitted && (
        <button onClick={handleSubmit} style={{ marginTop: '20px', padding: '10px 20px' }}>
          Submit Quiz
        </button>
      )}

      {submitted && (
        <p style={{ marginTop: '20px', color: 'green' }}>
          Quiz submitted! Score: {questions.filter(q => selected[q.id]?.correct).length}/{questions.length}
        </p>
      )}
    </div>
  );
}

export default Quizzes;
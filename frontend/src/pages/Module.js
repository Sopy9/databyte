import { Link, useParams } from 'react-router-dom';

function Module() {

    const { moduleId } = useParams();
    if (moduleId !== "1") {
        return (
            <div className="container">
                <h1>This Module hasn't been made yet</h1>
                <p>More lessons coming soon...</p>
            </div>
        )
    }
  return (
  <div className="container">
    <h1>Module 1</h1>
    <h3>Lesson 0</h3>

    <div>
        <div>
            <h4>What is Data Science?</h4>
            <p>
                Data science is the practice of extracting meaning from data. It combines statistics, 
                programming, and domain knowledge to answer questions, find patterns, and make decisions.
            </p>

            <h4>Why is it important?</h4>
            <p>
                Data science powers the technology we use every day. Netflix recommendations, Spotify 
                playlists, Instagram feeds — all driven by data. Learning data science gives you the 
                tools to understand and build these systems yourself.
            </p>

            <h4>What will you learn?</h4>
            <p>
                In this module, you'll get a high-level overview of what data science is, why it matters, 
                and what tools data scientists use. By the end, you'll understand the basic workflow: 
                collect → clean → analyze → visualize.
            </p>
        </div>

        <div>
            <h4>Fun Facts about Data Science!</h4>
            <ul>
                <li>The term 'data scientist' was coined in 2008 — it's one of the newest major job titles in tech!</li>
                <li>Every day, the world generates around 2.5 quintillion bytes of data.</li>
                <li>The average data scientist spends about 80% of their time cleaning data — and only 20% actually analyzing it.</li>
            </ul>
        </div>
    </div>

    <Link to="/quizzes/0">
        <button>Take Quiz 0!</button>
    </Link>

    <div>
        <h3>Lesson 1</h3>
        <p>coming soon...</p>
    </div>    
  </div>
  )

}
export default Module

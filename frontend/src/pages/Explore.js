import { Link } from 'react-router-dom';

function Explore() {
  return (
  <div>
    {/* Hero Section */}
    <div>
        <h1>Learn Data Science for Free</h1>
        <p>
            Welcome to databyte where we will walk you through bite-sized data science lessons to introduce you to 
            data science! You can learn through the “Lessons” tab, test your knowledge through the “Quizzes” tab, and 
            see your progress through your Dashboard!
        </p>
    </div>

    {/* Navigation Cards */}
    <div>
        
        <Link to="/lessons">
            <div>
                <h5>Lessons</h5>
                <p>Learn the content</p>
            </div>
        </Link>

        <Link to="/quizzes/0">
            <div>
                <h5>Quizzes</h5>
                <p>Test your knowledge</p>
            </div>
        </Link>

        <Link to="/dashboard">
            <div>
                <h5>Dashboard</h5>
                <p>See your progress</p>
            </div>
        </Link>
    </div>

    {/* Created by Section */}
    <div>
        <h2>Created by</h2>
        <div> 
            <div>
                <p>Bradley Tsou</p>
            </div>
            <div>
                <p>Sophie Kang</p>
            </div>
        </div>
    </div>
  </div>

)}
export default Explore
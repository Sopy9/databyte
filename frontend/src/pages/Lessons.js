import { Link } from 'react-router-dom';
import './Lessons.css'

function Lessons() {

  return (
  <div className="container">
    {/** header ig */}
    <h1>Lessons</h1>
    
    {/** Module Cards */}
    <div className="module-cards">
        <Link to="/module/1" className="mod-card">
        <div>
            <h5>Module 1</h5>
            <p>Includes lessons 0 - 3</p>
        </div>
        </Link>

        <Link to="/module/2" className="mod-card">
        <div>
            <h5>Module 2</h5>
            <p>Includes lessons 4 - 6</p>
        </div>
        </Link>

        <Link to="/module/3" className="mod-card">
        <div>
            <h5>Module 3</h5>
            <p>Includes lessons 7 - 9</p>
        </div>
        </Link>
    </div>

  </div>


  )
}
export default Lessons
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Janet's Website</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects" className="projects">Projects</Link>
        <Link to="/hobbies" className="hobbies">Hobbies</Link>
        <Link to="/contact" className="contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

// import {Link} from 'react-router-dom';
// import './Navbar.css';  // Import the CSS file


// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>Janet's Website</h1>
//             <div className="links">
//                 <Link to = "/"> Home </Link>
//                 <Link to = "/projects" style={{
//                     color: "white",
//                     backgroundColor: '#f1356d',
//                     borderRadius: '8px'
//                 }}
//                 >Projects</Link>
//                 <Link to = "/hobbies" style = {{
//                     color: "white",
//                     backgroundColor: '#5cc3ff',
//                     borderRadius: '8px'
//                 }}
//                 >Hobbies</Link>
//             </div>
//         </nav>

//      );
// }
 
// export default Navbar;
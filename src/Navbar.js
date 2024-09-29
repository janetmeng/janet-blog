import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Janet's Website</h1>
            <div className="links">
                <Link to = "/"> Home </Link>
                <Link to = "/projects" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}
                >My Projects</Link>
                <Link to = "/hobbies" style = {{
                    color: "white",
                    backgroundColor: '#5cc3ff',
                    borderRadius: '8px'
                }}
                >Hobbies</Link>
            </div>
        </nav>

     );
}
 
export default Navbar;
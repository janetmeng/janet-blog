import {Link} from 'react-router-dom';

import headshot from './assets/headshot3.png';

const Home = () => {
    const link = "https://www.linkedin.com/in/janet-meng/";

    const handleClick = (e) => {
        console.log('Hello, ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log(`Hello ${name}`, e.target);
    }

    return (
        <div className="homepage-content">
            {/* Photo of Me */}
            <img 
                src={headshot} 
                alt="Profile" 
                style={{ width: '200px', borderRadius: '10px', marginBottom: '20px' }} 
            />

            {/* Introduction */}
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Hello! I'm Janet, a student studying Computer Science (BS) and Statistics (BS) at Duke University. 
                I'm interested in engineering optimal software and tackling real-world problems—whether through accelerated computing or designing more accurate machine learning models.
            </p>

            <br />
            
            <p>
                Learn more about my{' '}
                <Link to = "/projects">Projects</Link> {' '}and{' '}
                <Link to = "/hobbies">Hobbies</Link>{' '}here.
            </p>

            <br />
            <br />
            {/* LinkedIn Link */}
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                Connect with me on LinkedIn
            </a>

            {/* Buttons for demo purposes */}
            {/* <div className="button-container" style={{ marginTop: '20px' }}>
                <button onClick={handleClick} style={{ marginRight: '10px' }}>Click me</button>
                <button onClick={(e) => handleClickAgain('Janie', e)}>Click me again</button>
            </div> */}
        </div>
    );
}

export default Home;

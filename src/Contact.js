import React from 'react';
import './Contact.css';

const Home = () => {
    const linkedinlink = "https://www.linkedin.com/in/janet-meng/";
    const gmaillink = "mailto:janet.meng@duke.edu";
    const githublink = "https://github.com/janetmeng";

    return (
        <div className="homepage-content">            
         
            {/* LinkedIn Link */}
            <a href={linkedinlink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                Connect with me on LinkedIn
            </a>
            <br />
            <a href={gmaillink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                Email Me
            </a>
            <br />
            <a href={githublink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                Check out my GitHub
            </a>
        </div>
    );
}

export default Home;

// import React from 'react';
// import './Contact.css';  // Import the CSS file

// const Contact = () => {
//   // Define your link variables
//   const linkedinlink = "https://www.linkedin.com/in/janet-meng/";
//   const gmaillink = "mailto:janet.meng@duke.edu";
//   const githublink = "https://github.com/janetmeng";

//   return (
//     <div className="contact">
//       <h1>Contact Me</h1>
//       <a href={linkedinlink} target="_blank" rel="noopener noreferrer" className="contact-link">
//         Connect with me on LinkedIn
//       </a>
//       <a href={gmaillink} target="_blank" rel="noopener noreferrer" className="contact-link">
//         Email Me
//       </a>
//       <a href={githublink} target="_blank" rel="noopener noreferrer" className="contact-link">
//         Check out my GitHub
//       </a>
//     </div>
//   );
// }

// export default Contact;

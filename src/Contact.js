import React from 'react';
import './Contact.css';

const Contact = () => {
    const linkedinlink = "https://www.linkedin.com/in/janet-meng/";
    const gmaillink = "mailto:janet.meng@duke.edu";
    const githublink = "https://github.com/janetmeng";

    return (
        <div className="contact">            
         
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

export default Contact;

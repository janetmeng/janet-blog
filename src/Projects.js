import React from 'react';

const Projects = () => {
    const nurturenestlink = "https://github.com/flomc/Ai-medical-assistant/";

    return (
        <div className="projects">
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>My Projects</h1>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Project 1: NurtureNest</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        Built using <strong>Streamlit</strong> in the frontend and hosted by Tune AI, which supported all LLM models and backend integration, our product had the following key features:
                        <br />
                        <strong>Used OpenAI’s Whisper</strong> for automatic speech recognition and fine-tuned Llama 3 8B Instruct to generate childcare advice. We added Google’s Text-to-Speech API to ensure smooth and interactive voice responses.
                        <br />
                        <strong>Baby Cry Classifier</strong>: Integrated <em>wav2vec2</em> and <em>AutoFeatureExtractor</em> from Hugging Face to classify baby cries and offer tailored solutions based on the type of cry.
                    </p>
                    <a 
                        href={nurturenestlink} 
                        style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px' }} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub Link
                    </a>
                </li>

                <li style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Project 2: Search the Sea iOS App</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        Built the classic card game <strong>Spot It</strong> into a mobile app! Used Swift and Objective C to program this app. Complete with different deck sizes, this game is suitable whether you're on the go or want to play for a while! 
                        <br />
                        Download it on the <strong>App Store</strong> now.
                    </p>
                </li>

                <li>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Project 3: ML Research</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        Applied Python deep learning-based image analysis to CD8 T cells to automatically identify a protein for mapping the progression of <strong>Type 1 Diabetes</strong>.
                        <br />
                        Utilized <strong>TensorFlow, Keras</strong>, and Jupyter Notebook to develop a code pipeline for pseudo- and hand-labeled cell populations as validation and benchmark data.
                        <br />
                        Co-authored a 38-page <a href="https://elifesciences.org/reviewed-preprints/100535" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>paper</a> entitled “The Extra-Islet Pancreas Supports Autoimmunity in Human Type 1 Diabetes” to publish in <em>Nature Communications</em>.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Projects;

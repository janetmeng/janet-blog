
import profileImage from './assets/ghana.jpg'; 
import wopo1 from './assets/wopo1.png';
import wopo2 from './assets/wopo2.jpeg';
import surf from './assets/surf.jpeg';
import snorkeling from './assets/snorkeling.jpeg';
import food from './assets/food.jpeg';

const Hobbies = () => {
    return (
        <div className="hobbies" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Hobbies</h1>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                
                <li style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Aquatic Sports</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        I play water polo, swim, and surf!
                    </p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <img 
                            src={wopo1} 
                            alt="Water polo game 1" 
                            style={{ width: '200px', height: 'auto', borderRadius: '10px' }} 
                        />
                        <img 
                            src={wopo2} 
                            alt="Water polo game 2" 
                            style={{ width: '200px', height: 'auto', borderRadius: '10px' }} 
                        />
                        <img 
                            src={surf} 
                            alt="Surfing" 
                            style={{ width: '200px', height: 'auto', borderRadius: '10px' }} 
                        />
                        <img 
                            src={snorkeling} 
                            alt="Snorkeling" 
                            style={{ width: '200px', height: 'auto', borderRadius: '10px' }} 
                        />
                    </div>
                </li>

                <li style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Crime Shows</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        Top TV Shows/Movies:
                    </p>
                    <ol style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        <li><a href="https://en.wikipedia.org/wiki/Knives_Out" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Knives Out</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Dead_to_Me_(TV_series)" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Dead to Me</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/The_Perfect_Couple_(TV_series)" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>The Perfect Couple</a></li>
                    </ol>
                </li>

                <li style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Traveling</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        I traveled to Ghana to improve the school infrastructure at a Prepatory School and to teach CS lessons to 30 students at the University of Ghana.
                    </p>
                    <img 
                        src={profileImage} 
                        alt="Ghana school building project" 
                        style={{ width: '300px', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} 
                    />
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        I traveled to Bora Bora with my family in December 2023 and enjoyed delicious Polynesian food!
                    </p>
                    <img 
                        src={food} 
                        alt="Polynesian cuisine" 
                        style={{ width: '300px', height: 'auto', borderRadius: '10px' }} 
                    />
                </li>
            </ul>
        </div>
    );
}

export default Hobbies;
import profileImage from './assets/ghana.jpg'; 
import wopo1 from './assets/wopo1.png';
import wopo2 from './assets/wopo2.jpeg';
import surf from './assets/surf.jpeg';
import snorkeling from './assets/snorkeling.jpeg';
import food from './assets/food.jpeg';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>My Hobbies</h1>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Aquatic Sports</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        I play water polo, swim, and surf!
                    </p>
                    <img 
                        src={wopo1} 
                        alt="Water polo game 1" 
                        style={{ width: '200px', borderRadius: '10px', marginRight: '10px' }} 
                    />
                    <img 
                        src={wopo2} 
                        alt="Water polo game 2" 
                        style={{ width: '200px', borderRadius: '10px', marginRight: '10px' }} 
                    />
                    <img 
                        src={surf} 
                        alt="Surfing" 
                        style={{ width: '200px', borderRadius: '10px', marginRight: '10px' }} 
                    />
                    <img 
                        src={snorkeling} 
                        alt="Snorkeling" 
                        style={{ width: '200px', borderRadius: '10px' }} 
                    />
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
                        I traveled to Ghana to build school infrastructure at Mfantisman Preparatory School and taught coding lessons to University of Ghana students.
                    </p>
                    <img 
                        src={profileImage} 
                        alt="Ghana school building project" 
                        style={{ width: '200px', borderRadius: '10px', marginRight: '10px' }} 
                    />
                    <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                        I also traveled to Bora Bora with my family and enjoyed delicious Polynesian food!
                    </p>
                    <img 
                        src={food} 
                        alt="Polynesian cuisine" 
                        style={{ width: '200px', borderRadius: '10px' }} 
                    />
                </li>
            </ul>
        </div>
    );
}

export default Hobbies;

import Navbar from './Navbar';
import Home from './Home';

function App() {
  const likes = 50;
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>Liked { likes } times</p>

        <p>{ 10 } </p> 
        <p>{ " hello ninjas"}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;

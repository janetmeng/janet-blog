const Home = () => {
    const handleClick = (e) => {
        console.log('hello,ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }
    return ( 
        <div className = "home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('janie', e)}>Click me agagin</button>
        </div>

     );
}
 
export default Home;
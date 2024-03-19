import { useState } from 'react';
import { faucets_backend } from 'declarations/faucets_backend';
import Navbar from './components/Navbar';
import Glow from './components/Glow';
import Card from './components/tiltCard';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    faucets_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    
    <>
      
      
      <Navbar/>
      <Glow/>
      <Card/>
      <br />
      <br />
      
      {/* <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section> */}
    
      
    </>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [currencyInput, setCurrencyInput] = useState('');
  const [euroOutput, setEuroOutput] = useState('');

  // 1. Increment and Decrement button 
  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  // 2. "Increase" button invokes multiple methods 
  const incrementValue = () => {
    setCounter(prevCounter => prevCounter + 1); // To increment the value 
  };

  const sayHello = () => {
    alert('Hello! This is a static message.'); // Say Hello followed by a static message 
  };

  const handleIncreaseAndGreet = () => {
    incrementValue();
    sayHello();
  };

  // 3. Button "Say Welcome" invokes function with argument 
  const sayMessage = (message) => {
    alert(`You said: ${message}`);
  };

  // 4. Button invokes synthetic event "OnPress" (React uses onClick for click events) 
  // Note: "OnPress" is commonly used in React Native. For web, it's `onClick`.
  const handleSyntheticEventClick = (event) => {
    console.log("Synthetic Event:", event); // You can inspect the synthetic event object
    alert('I was clicked using a synthetic event!'); // Display "I was clicked" 
  };

  // 5. Currency Convertor Component 
  const handleCurrencyInputChange = (e) => {
    setCurrencyInput(e.target.value);
  };

  const handleSubmitConversion = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const indianRupees = parseFloat(currencyInput);
    if (!isNaN(indianRupees)) {
      // Assuming 1 Euro = 90 INR for this example
      const euroValue = indianRupees / 90;
      setEuroOutput(`${euroValue.toFixed(2)} Euro`);
    } else {
      setEuroOutput('Please enter a valid number.');
    }
  }; // Handle the Click event of the button to invoke the handleSubmit event and handle the conversion of the euro to rupees. 


  return (
    <div style={{ padding: '20px' }}>
      <h1>React Event Examples</h1>

      {/* Counter Section */}
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button> 
      <button onClick={handleDecrement}>Decrement</button> 

      <hr />

      {/* Multiple Methods Section */}
      <h2>Invoke Multiple Methods</h2>
      <button onClick={handleIncreaseAndGreet}>Increase and Greet</button> 

      <hr />

      {/* Function with Argument Section */}
      <h2>Function with Argument</h2>
      <button onClick={() => sayMessage('Welcome')}>Say Welcome</button> 

      <hr />

      {/* Synthetic Event Section */}
      <h2>Synthetic Event Example</h2>
      <button onClick={handleSyntheticEventClick}>Click Me (Synthetic Event)</button> 

      <hr />

      {/* Currency Convertor Section */}
      <h2>Currency Converter (INR to Euro)</h2> 
      <form onSubmit={handleSubmitConversion}>
        <label>
          Indian Rupees:
          <input
            type="text"
            value={currencyInput}
            onChange={handleCurrencyInputChange}
            placeholder="Enter INR amount"
          />
        </label>
        <button type="submit">Convert</button> 
      </form>
      {euroOutput && <p>Converted Value: {euroOutput}</p>}
    </div>
  );
}

export default App;
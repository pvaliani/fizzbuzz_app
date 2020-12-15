import { useEffect, useState } from "react";


import './App.css';

function App() {

// defines a destructured array of inputNumber with a method to control the state. Initial state of inputNumber is 0
  const [inputNumber, setNumber] = useState(0);
  const [answer, setAnswer] = useState("");


// our fizzbuzz useEffect arrow function - inputNumber as second argument as we are "watching" it

  useEffect(()=>{

    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }


  },[inputNumber])

// handles the increment of inputNumber for fizzbuzz 
  const handleInc = () => {
    setNumber(inputNumber + 1);

  }


// returns a button which can be clicked and displays the current inputNumber
  return (
    <>
      <button onClick={handleInc}> + </button>
      {/* show answer as it will vary between number/string as the increment goes on */}
      <h1>{answer}</h1>
    </>
  );
}

export default App;

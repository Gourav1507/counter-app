import React,{useState} from 'react'
// import state here
import value from './component/value';
import './App.css';

function App() {
  const [Count,setCount]=useState(0);
  // setcount method will be responsible for updating the variable or chsnging the variable 
  const [DecrementCount,setDecrementCount]=useState("");
  const [IncrementCount,setIncrementCount]=useState("");
  
  const [inputVal, setInputVal]=useState('');


  const setCountWithValue= value =>() =>{
    setCount(value);
  };
  const handleInputChange = e =>{
    setInputVal(e.target.value);
    // method handling
  };
  const handleInputChangeOnDecrement = (e) => {
  
    setDecrementCount(e.target.value);
  }
  const handleInputChangeOnIncrement = (e) => {
   
    setIncrementCount(e.target.value);
  }
  const handleUpdateViaInput = () =>{
    setCount(Number(inputVal));
    setInputVal('');
  }; 
  
    
// inside the input it will reads what the input variable is right now it is a empty string whenever we write
// something it will go into the method handling and update our variable with whatever we write here
  

  return (
   
    
  
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="cardbody"></div>
        <h1>Counter App</h1>
<div className="my-5">
  <h2 className="my-5">{Count}</h2>
  <input  onChange={handleInputChangeOnDecrement}  value={DecrementCount} />
  <button className="btn btn-danger mx-3"
  
  onClick={setCountWithValue(Count-Number(DecrementCount))}>Decrement</button>
  {/* this button is responsible for decreasing the value ,onclick is a property  we have to vconnect this value to one of our state variable*/}
   <button className="btn btn-danger mx-3"
  onClick={setCountWithValue(Count+ Number(IncrementCount))}>Increment</button>
  
  <input  onChange={handleInputChangeOnIncrement}   value={IncrementCount}   />
    {/* this button is responsible for increasing the value  */}
  <button className="btn btn-secondary mx-3"onClick={setCountWithValue(0)}>Reset</button>
    {/* this button is responsible for Reset the value  */}
</div>
<div>
<input  onChange={handleInputChange} value={inputVal}  />
        
        <button onClick={handleUpdateViaInput}>Update Value to the Count</button>
        
       
  
    </div>
    </div>
    </div>
     

   
  )
};

export default App;
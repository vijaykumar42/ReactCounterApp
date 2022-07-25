import React,{useState} from 'react';

const App = () => {
  const [input, setInput] = useState(0);
  const Adder = ()=>{
    setInput(input+1)
  }
  const Remover = ()=>{
    setInput(input-1)
  }

  return (
    <div className='container m-2'>
      <center>
         <h1>SIMPLE COUNTER APP</h1>
         <h3 className='p-3 bg-light'>{input}</h3>
         <button onClick={Adder} className='btn btn-primary'>Add</button>
         <button onClick={Remover} className='btn btn-primary m-2'>Remove</button>
      </center>
    </div>
  )
}

export default App
import { useState }  from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter+1)
    const decrement = () => setCounter(counter-1)
    const reset = () => setCounter(0)

    return {
        counter,
        increase,
        decrement,
        reset
    }

}


export default function CustomHooks() {

    const counterLeft =  useCounter();
    const counterRight =  useCounter();


  return (
    <div>
        <div>{counterLeft.counter}</div>
        <button onClick={counterLeft.increase}>+</button>
        <button onClick={counterLeft.decrement}>-</button>
        <button onClick={counterLeft.reset}>Reset</button>

        <br/>
        <h1>HOLA MUNDO</h1>

        <div>{counterRight.counter}</div>
        <button onClick={counterRight.increase}>+</button>
        <button onClick={counterRight.decrement}>-</button>
        <button onClick={counterRight.reset}>Reset</button>
        
    </div>
  )
}

 
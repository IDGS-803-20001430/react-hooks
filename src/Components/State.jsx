import { useEffect, useState } from 'react'

const State = () => {
    //Agregamos un nuevo estado al componente.
    const [state, setState] = useState(0);

    //console.log(state);

    //Modificar el estado
    //setState(10);

    //Agregando un useEffect el cual permite manejar el ciclo de vida del componente
    //Los [] son una listga de dependencias que indican de que variables de estado depende el useEffect
    useEffect(()=>{
        console.log(state);
    }, [state]);

    const handleClick = () =>{
        setState(state + 1);
    }

  return (
    <div>
      <h1>Hook useState</h1>
      Cuenta: {state}
      <br />
      <button onClick={handleClick}>Aumentar</button>
    </div>
  );
};

export default State;

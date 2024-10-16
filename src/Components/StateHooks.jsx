import { useEffect, useState } from "react"

function StateHooks() {
    //Declaramos una variable de estado utilizando el hook de useState
    const [count, setCount] = useState(0);

    //Agregando el hook useEffect para modificar el titulo de la página da vez que cambie el estado.
    useEffect(() => {
        document.title = `Haz presionado el botón ${count} veces.`
    });

    return (
        <div>
            <h1>Usestate</h1>
            <hr />

            <p>Haz presionando el botón {count} veces.</p>
            <button onClick={() => setCount(count + 1 )}>Incrementar</button>
        </div>
    );
};

export default StateHooks;

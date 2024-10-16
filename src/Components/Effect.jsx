import { useEffect, useState } from 'react'

const Effect = () => {
    //Agregamos un estado para almacenar los daots.
    const [users, setUsers] = useState([]);

    //Función para hacer una petición a la API de JsonPlaceHolder
    const getUsuarios = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        setUsers(data);
    };

    //Agregamos un useEffect
    useEffect(()=>{
        getUsuarios();
    }, []);

    console.log(users);

  return (
    <div>
      <h1>Hook useEffect</h1>
    </div>
  )
}

export default Effect


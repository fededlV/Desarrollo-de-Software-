import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello React!!</h1>); //Creando un hola mundo

//Creacion de primer componente
/*  function Greeting() {
 const married = true;
 if (married) {
    return <h1>Estoy casado</h1>;
  } else {
    return <h1>No estoy casado</h1>;
  }
//Con operador ternario
 return <h1>{married ? "Estoy casado 😃" : "No estoy casado 🤣"}</h1>;
 const user = {
    firstName: "Fede",
    lastName: "de la Vega",
  };
  function add(x, y) {
    return x + y;
  }
  return (
    <div>
      {" "}
      <h1>{user.firstName}</h1>
      <h2>{add(10, 30)}</h2>
      <h3>{user.lastName}</h3>
    </div>
  );
} */
root.render(
  <>
    {/* Fragment <>: Etiqueta de JSX que nos permite no utilizar muchos div o otras etiquetas para contener contenido js, es un contenedor vacio */}
    <Greeting />
    <Greeting />
    <Greeting />
  </>
  /* Self closing tag: etiquetas que se cierran en si misma */
);

/* --------------------------------------------Etapa EcmaScript - Javascript Modules------------------------- */

root.render(
  <>
    <Greeting />
    <UserCard></UserCard>
    <Product />
    <Navbar />
  </>
);

/* -------------------------------------------- React Props ------------------------------------------------------------
  Props: Parametro de una funcion, el title por ejemplo es un props
Tambien puede ser q se le pase una funcion */
root.render(
  <>
    <Greeting title="hola" name="Fede" />
    <Greeting title="Hola React" name="Ryan" />
    <Greeting title="Hola Fede" />
    <Greeting title="Hola PA" />
    <UserCard
      name="Fede de la Vega"
      amount={3000}
      married={true}
      points={[99, 3, 33.3]}
      address={{ street: "123 main street", city: "New York" }} //Aca las primeras llaves son para indicar que algo de js y la segunda es para indicarle que es un objeto
      greet={function () {
        alert("Hola");
      }}
    />
  </>
);

/*  -------------------------------------------- PropTypes y defaultProps ------------------------------------------------*/
//PropTypes: Es una libreria que nos permite validar los tipos de datos que se le pasan a los componentes
root.render(
  <>
    <Button text="Pay" />
    <Button text="Go to" />
    <Button text="" name="Fede" />
  </>
);

/*  -------------------------------------------- Estilos de componentes ------------------------------------------------ */
root.render(
  <>
    <TaskCard ready={true} />
  </>
);

/* -------------------------------------------- Tipos de componentes ------------------------------------------------ */

root.render(
  <>
    <Saludar />
  </>
);

/*  -------------------------------------------- Event Handlers  ------------------------------------------------ */

/* const handleChange = (e) => {
  console.log(e.target.value);
}; */

root.render(
  <>
    <Button text="Click pa" />
    <input
      id="hola"
      onChange={function (event) {
        //se puede hacer con arrow function, se la puede hacer afuera del render, y se la llama
        console.log(event.target.value + "...");
      }}
    ></input>
    <input
      id="Hola"
      onDoubleClick={() => {
        console.log("Double click");
      }}
    ></input>
    <form
      onSubmit={(e) => {
        e.preventDefault(); //cancela el comportamiento por defecto del formulario
        alert("Form submit");
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
  </>
);
/* -------------------------------------------- Fetch API ------------------------------------------------------------- */

root.render(
  <>
    <Post />
  </>
);

/* --------------------------------------------- Third Party modules, react-icons -------------------------------------- */

root.render(
  <>
    <Post />
  </>
);

/* --------------------------------------------- Arrays ----------------------------------------------------------- */

const user = [
  {
    id: 1,
    name: "Fede",
    lastName: "de la Vega",
    image: "https://robohash.org/1",
  },
  {
    id: 2,
    name: "santi",
    lastName: "Vega",
    image: "https://robohash.org/2",
  },
];

root.render(
  <>
    {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={user.image} alt=""></img>
        </div>
      );
    })}
  </>
);

/* --------------------------------------------- React Hooks ----------------------------------------------------------- */
/* useState: Permite que podamos cambiar un elemento a lo largo del ciclo de vida de la aplicacion, cambia en la interfaz. */

const Counter = () => {
  /* const [ counter, setCounter] = useState(10) */
  const [mensaje, setMensaje] = useState("");
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setMensaje(e.target.value);
          }}
        />
        <button
          onClick={() => {
            alert("El mensaje es: " + mensaje);
          }}
        >
          Save
        </button>
      </div>
      {/* <h1>Counter: {counter}</h1>
      <button
      onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
      Decrement
      </button>
      <button
      onClick={() => {
        setCounter(15);
        }}
        >
        Reset
      </button> */}
    </>
  );
};

root.render(
  <>
    <Counter />
  </>
);

/* useEffect */
const Counter2 = () => {
  const [numero, setNumero] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]); //Se ejecuta solo cuando counter cambia

  return (
    <>
      <div>
        <input onChange={(e) => setNumero(e.target.value)} />
        <button
          onClick={() => {
            alert("El numero es: " + numero);
          }}
        >
          Save
        </button>
        <hr />
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Incrementar
        </button>
      </div>
    </>
  );
};

root.render(
  <>
    <Counter2 />
  </>
);

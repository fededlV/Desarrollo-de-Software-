/* Pascal case todas las funciones o componentes deben empezar si o si en mayuscula para que sean reconocidas */
export function Greeting({ title, name = "user" }) { /* se les puede asignar un valor por defecto  */
  console.log(title, name);
  return <h1>{title}, dice {name}</h1>;
}

/* export function UserCard(props) {
  console.log(props);
  return <div>
    <h1>{props.name}</h1>
    <p>${props.amount}</p>
    <p>{props.married ? "married" : "Single"}</p>
    <ul>
      <li>City: {props.address.city}</li>
      <li>Street: {props.address.street}</li>
    </ul>
  </div>
}
Esta es una forma de hacerlo  */


export function UserCard({name, amount, address, married, greet}) {
  console.log(greet);
  return <div>
    <h1>{name}</h1>
    <p>${amount}</p>
    <p>{married ? "married" : "Single"}</p>
    <ul>
      <li>City: {address.city}</li>
      <li>Street: {address.street}</li>
    </ul>
  </div>
}
/* CTRL + D para seleccionar una misma palabra para abajo */
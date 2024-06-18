import React from 'react'

export default function EstTableRow({ estudiante, setDataToEdit, deleteData }) {
  let { Id_Estudiante, Nombre, Apellido, Fecha_nacimiento, Direccion, Telefono, Email } = estudiante
    return (
    <tr>
        <td>{Id_Estudiante}</td>
        <td>{Nombre}</td>
        <td>{Apellido}</td>
        <td>{Fecha_nacimiento}</td>
        <td>{Direccion}</td>
        <td>{Telefono}</td>
        <td>{Email}</td>
        <td>
            <button onClick={() => setDataToEdit(estudiante)}>Editar</button>
            <button onClick={() => deleteData(Id_Estudiante)}>Eliminar</button>
        </td>
    </tr>
  )
}

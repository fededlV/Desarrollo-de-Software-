import EstTableRow from "./EstTableRow"

export default function EstudiantesTable({ estudiante, setDataToEdit, deleteData }) {
  return (
    <div>
        <h3>Tabla de Estudiantes</h3>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {estudiante.length > 0 ? (
                    estudiante.map((estudiante) => (
                        <EstTableRow
                            key={estudiante.Id_Estudiante}
                            estudiante={estudiante}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan="7">No hay datos</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

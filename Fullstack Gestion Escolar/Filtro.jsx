import {useState} from 'react'

export default function Filtro({ onConsultar }) {
  const [search, setSearch ] = useState("")

  const onClick = () => {
    onConsultar(search)
  }

  const filteredEstudiantes = (e) => {
    setSearch(e.target.value)
  }


    return (
    <div>
        <h6>Consultar estudiantes</h6>
        <div>
            <h6>Ingrese ID del estudiante a buscar:</h6>
            <input type="text" onChange={filteredEstudiantes}/>
            <button onClick={onClick}>Consultar</button>
        </div>
    </div>
  )
}

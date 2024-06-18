import { useState, useEffect } from "react"
import EstudiantesTable from "./EstudiantesTable"
import EstudiantesForm from "./EstudiantesForm"
import Filtro from "./Filtro"
import axios from "axios"


export default function Estudiantes() {
    const [estudiantes, setEstudiantes ] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = "http://localhost:3000/gestionEscolar/estudiantes"

    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then(res => {
            setEstudiantes(res.data)
        })
        .catch(err => {
            setError(err)
            setEstudiantes(null)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [url])

    const onConsultar = async (filter) => {
        try {
            const res = await axios.get(`${url}/${filter}`)
            setEstudiantes(res.data)
        } catch (error) {
            console.log("Error al consultar el estudiante: ", error)
    }

    const createEstudiantes = async (data) => {
        try {
            const res = await axios.post(url, data)
            setEstudiantes([...estudiantes, res.data])
            console.log("Estudiante creado", res.data)
        } catch (error) {
            console.log("Error al crear el estudiante: ", error)
        }
    }

    const updateEstudiantes = async (data) => {
        try {
            const res = await axios.put(`${url}/${data.Id_Estudiante}`, data)
            const newData = estudiantes.map(item => (item.Id_Estudiante === data.Id_Estudiante ? data : item))
            setEstudiantes(newData)
            console.log("Estudiante actualizado", res.data)
        } catch (error) {
            console.log("Error al actualizar el estudiante: ", error)
        }
    }

    const deleteEstudiantes = async (id) => {
        try {
            const response = await axios.delete(`${url}/${id}`)
            const newData = estudiantes.filter(item => item.Id_Estudiante !== id)
            setEstudiantes(newData)
            console.log("Estudiante eliminado", response)
        } catch (error) {
            console.log("Error al eliminar el estudiante: ", error)
        }
    }

  return (
    <div>
        <h2>Estudiantes</h2>
        {/* <Filtro onConsultar={onConsultar}/> */}
{/*         <EstudiantesForm
            createEstudiante={createEstudiantes}
            updateEstudiante={updateEstudiantes}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}/> */}
        {loading && <p>Cargando...</p>}
        {error && <p>Error...</p>}
        {estudiantes && (
            <EstudiantesTable 
            estudiante={estudiantes}
            setDataToEdit={setDataToEdit}
            deleteData={deleteEstudiantes}/>
        )}
    </div>
  )
}
}

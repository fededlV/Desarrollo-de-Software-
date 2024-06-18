import { useState } from "react";

const Extracurricular = ({ actividad, onUpdate, onDelete, onAdd }) => {
  const [nuevaActividadNom, setNuevaActividadNom] = useState("");

  const handleAdd = () => {
    onAdd({ name: nuevaActividadNom });
    setNuevaActividadNom(""); //Se limpia el valor del input
  };
  return (
    <div>
      <h2>Actividades Extracurriculares</h2>
      <ul>
        {actividad.map((act) => (
          <li key={act.id}>
            {act.name}
            <button onClick={() => onUpdate(act)}>Actualizar</button>
            <button onClick={() => onDelete(act.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevaActividadNom}
        onChange={(e) => setNuevaActividadNom(e.target.value)}
        placeholder="Nueva actividad"
      />
      <button onClick={handleAdd}>Agregar Nueva Actividad</button>
    </div>
  );
};

export default Extracurricular
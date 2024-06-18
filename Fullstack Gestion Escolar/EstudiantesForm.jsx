import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EstudiantesForm({
  createEstudiante,
  updateEstudiante,
  dataToEdit,
  setDataToEdit,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (dataToEdit) {
      reset(dataToEdit);
    } else {
      reset({
        Id_Estudiante: null,
        Nombre: "",
        Apellido: "",
        Fecha_nacimiento: "",
        Direccion: "",
        Telefono: "",
        Email: "",
      });
    }
  }, [dataToEdit, reset]);

  const onSubmit = (data) => {
    if (data.Id_Estudiante === null) {
      createEstudiante(data);
    } else {
      updateEstudiante(data);
    }
    handleReset();
  };

  const handleReset = () => {
    reset({
      Id_Estudiante: null,
      Nombre: "",
      Apellido: "",
      Fecha_nacimiento: "",
      Direccion: "",
      Telefono: "",
      Email: "",
    });
    setDataToEdit(null)
  };
  
  return (
    <div>
        <div>Datos del Estudiante</div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input
        type="text"
        placeholder="Ingrese nombre del estudiante"
        {...register("nombre", {required:"El nombre es requerido!"})}/>
        {errors.nombre && <span>{errors.nombre.message}</span>}
        
        <input
        type="text"
        placeholder="Ingrese apellido"
        {...register("Apellido", {required: "El apellido es requerido!"})}/>
        {errors.Apellido && <span>{errors.Apellido.message}</span>}

        <input
        type="date"
        placeholder="Ingrese fecha de nacimiento"
        {...register("Fecha_de_Nacimiento", {required:"La fecha de nacimiento es requerida!"})}/>
        {errors.Fecha_de_Nacimiento && <span>{errors.Fecha_de_Nacimiento.message}</span>}

        <input
        type="text"
        placeholder="Ingrese Direccion"
        {...register("Direccion", {required:"La direccion es requerida!"})}/>
        {errors.Direccion && <span>{errors.Direccion.message}</span>}

        <input
        type="tel"
        placeholder="Ingrese telefono"
        {...register("Telefono", {required:"El telefono es requerido!"})}/>
        {errors.Telefono && <span>{errors.Telefono.message}</span>}

        <input
        type="email"
        placeholder="Ingrese Email"
        {...register("Email", {required:"El email es requerido!"})}/>
        {errors.Email && <span>{errors.Email.message}</span>}

        <input type="submit" value={dataToEdit ? "Actualizar" : "Crear"}/>
        <input type="reset" value="Reset" onClick={handleReset}/>

    </form>
    </div>
  )
}

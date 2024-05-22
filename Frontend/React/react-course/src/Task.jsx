import "./task.css"

export function TaskCard({ready}) {
    //const cardStyles = {background: '#202020', color: '#fff', padding: "20px"}
    //const titleStyle = {fontWeight: "ligther"}

    return <div className="card">
        <h1 className="card">Task Card</h1>
        <span
            /* style={ready ? {background: "green"} : {background: "red"}} */
            className={ready ? "bg-green" : "bg-red"}>{ready ? "Tarea realizada" : "Tarea Pendiente"}</span>
        <p>Task Descripcion</p>
    </div>
}
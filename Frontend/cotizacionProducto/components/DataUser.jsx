import '../public/dataUser.css'

export const DataUser = () => {
    

  return (
    <div className="form">
        <h1>Crear Cotización de Productos</h1>
        <form action="submit">
            <div>
                <label>Nombre:</label>
                <input type="text" />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" />
            </div>
            <div>
                <label>Dirección:</label>
                <input type="text" />
            </div>
            <div>
                <label>Fecha:</label>
                <input type="date" />
            </div>
            <button>Crear</button>
        </form>
    </div>
  )
}

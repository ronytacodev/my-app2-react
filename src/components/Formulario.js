import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
        // me quede en el min 9:27
    }); 

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row">
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Nombre" 
                        className="form-control"
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Apellido" 
                        className="form-control"
                    ></input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            
        </Fragment>

    );
}

export default Formulario;
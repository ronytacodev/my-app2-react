import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const {register, formState: { errors }, handleSubmit } = useForm();

    const [Entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data);
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    placeholder="Ingresa título"
                    className="form-control my-2"
                    {...
                        register("titulo", {
                            required: {value: true, message: 'Campo obligatorio'},
                            minLength: {value:2, message: 'Mínimo 2 letras'}
                        })
                    }
                ></input>
                { errors.titulo && 
                    <span className="text-danger text-small d-block mb-2"> 
                    {errors.titulo.message}
                </span>}
                <input
                    name="descripcion"
                    placeholder="Ingresa descripción"
                    className="form-control my-2"
                    {...
                        register('descripcion', {
                            required: {value: true, message: 'Campo obligatorio'}
                        })
                    }
                ></input>
                { errors.descripcion && 
                    <span className="text-danger text-small d-block mb-2"> 
                    {errors.descripcion.message}
                </span>}
                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    Entradas.map(item => 
                        <li>{item.titulo} - {item.descripcion}</li>)
                }
            </ul>
        </Fragment>
      );
}
 
export default EjemploUno;
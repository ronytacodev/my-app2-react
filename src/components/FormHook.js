import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {

    const {register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }

    return (
        <Fragment>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    className="form-control my-2"
                    placeholder="Ingresa tu nombre"
                    {...
                        register('titulo', {
                            required: {value:true, message: 'Título obligatorio'},
                            minLength: {value: 2, message: 'El titulo tiene que ser mas largo'}
                        })
                    }
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                <button className="btn btn-primary">Enviar</button>
                
            </form>

        </Fragment>
           
    );
}

export default FormHook;
import React, {Fragment} from 'react';

const Jsx = () => {

    // const saludo = 'Hola JSX'
    const temperatura = 21;

    return (
        // <h2>Soy un componente {saludo}</h2>
        <Fragment>
            <h2>Frío o calor?</h2>
            <h4>
                {
                    temperatura > 20 ? 'Calor' : 'Frío'
                }
            </h4>
        </Fragment>
           
    );
}

export default Jsx;
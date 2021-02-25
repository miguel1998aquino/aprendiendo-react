import React, { Component } from 'react';

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: 'Arroz Chaufa',
            ingredientes: ['tomate', 'Queso', 'Jamon Cocido'],
            calorias: 400
        }
        return (
            <div className='mi-componente'>
                <h1>El nombre de la receta es : {receta.nombre}</h1>
                <h2>Calorias : {receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr />
                {this.props.saludo &&
                    <React.Fragment>
                        <h1>Desde una prop: </h1>
                        <h3>{this.props.saludo}</h3>
                    </React.Fragment>
                    }
            </div>
        )
    }
}

export default MiComponente;

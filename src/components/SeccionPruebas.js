import React, { Component } from "react";
import MiComponente from "./MiComponente";
import ComponentePrueba from "./ComponentePrueba";

class SeccionPruebas extends Component {

    contador = 0;
    // constructor(props){
    //     super(props);

    //     this.state={
    //         contador: 0
    //     }
    // }
    state = {
        contador: 0
    }
    //var HolaMundo()=>{}
    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );
        return presentacion;
    }

    sumar =(e)=> {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar=(e)=> {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        var nombre = "Miguel Aquino";
        return (
            <section id="content">
                <h2 className="subheader">Lista de articulos</h2>
                <p>Bienvenidos al curso de React!!</p>
                <h2 className="subheader">Funciones  y JSX basico</h2>
                {this.HolaMundo(nombre, 23)}
                <h2 className="subheader">componentes</h2>
                <section className="componente">
                    <MiComponente />
                    <ComponentePrueba />
                </section>
                <h2 className="subheader">Estado</h2>
                <p>Contador: {this.state.contador}</p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>
            </section>
        );
    }
}
export default SeccionPruebas;

import React, { Component } from 'react';


class Sidebar extends Component {
    render(){
        return(
            <aside id="sidebar">
                {
                    this.props.blog === "true" &&
                <div id="nav-log" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="hola"className="btn btn-success">Crear Articulo</a>
                </div>
                }
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra lo que buscas</p>
                    <form action="">
                        <input type="text" name="search"/>
                        <input type="submit" name="submit" value="Buscar" className="btn"/>
                    </form>
                </div>
            </aside>
        )
    }
}
export default Sidebar;
import React, { Component } from 'react';
import Slider from './Slider'
import Sidebar from './Sidebar'

class Formulario extends Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    title="Formulario"
                    size="slider-small" />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del api */}
                    </div>
                    <Sidebar 
                    blog="false"/>
                </div>
            </div>
        )
    }
}

export default Formulario;
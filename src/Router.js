import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//importar mis componentes

import MiComponente from './components/MiComponente'
import Peliculas from './components/Peliculas'
import Error from './components/Error'
import Header from './components/Header'
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog"
import Formulario from './components/Formulario'
class Router extends Component {
    render() {
        return (
            // CONFIGURAR RUTAS Y PAGINAS
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/formulario" component={Formulario}/>
                    <Route exact path="/peliculas" component={Peliculas}/>
                    



                    <Route exact path="/segunda-ruta" component={MiComponente} />
                    <Route exact path="/pagina-1" render={
                        () => (
                            <React.Fragment>
                                <h1>hola mundo desde la ruta : Pagina1</h1>
                                <MiComponente saludo="Hola amigo" />
                            </React.Fragment>
                        )
                    } />
                    <Route exact path="/pruebas/:nombre/:apellido?" render={(props) => {
                        var nombre = props.match.params.nombre
                        var apellidos = props.match.params.apellido
                        return (
                            <div id="content">
                                <h1 className="subheader">Paginas de pruebas</h1>
                                <h2>{
                                    nombre && !apellidos &&
                                    <React.Fragment>{nombre}</React.Fragment>
                                }
                                    {
                                        nombre && apellidos &&
                                        <React.Fragment>{nombre + ' ' + apellidos}</React.Fragment>
                                    }
                                </h2>
                            </div>
                        )
                    }} />

                    <Route component={Error} />
                </Switch>
                <div className="clearfix"></div>
                <Footer />
            </BrowserRouter>
        )
    }
}
export default Router;
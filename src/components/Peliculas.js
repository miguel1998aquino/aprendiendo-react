import React, { Component } from "react";
import Pelicula from './Pelicula'
import Slider from './Slider'
import Sidebar from './Sidebar'


class Peliculas extends Component {
  state = {}
  cambiartitulo = () => {
    var { peliculas } = this.state
    // var random = Math.floor(Math.random()*3)
    peliculas[0].titulo = "civil war"
    this.setState({
      peliculas: peliculas
    })
  }

  favorita = (pelicula, indice) => {
    console.log('favorita marcada')
    console.log(pelicula, indice)
    this.setState({
      favorita: pelicula
    });
  }

  componentWillMount() {
    // alert("se va a montar el componente")
    this.setState({
      peliculas: [
        { titulo: 'End game', image: 'https://cnet1.cbsistatic.com/img/8hCTVdv5PbjQe3QwbS17Sw9CTPo=/1200x675/2019/04/25/9277c764-601d-4ab3-85f9-9c39d7f1ac5a/avengers-endgame-promo-crop.jpg' },
        { titulo: 'Iroman', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iron-man-vivo-1570783601.jpg' },
        { titulo: 'Interestelar', image: 'https://s03.s3c.es/imag/_v0/600x327/e/d/d/interestelar-coronavirus-secuela.jpg' }
      ],
      nombre: 'Miguel Aquino',
      favorita: {}
    })
  }
  // componentDidMount() {
  //   // alert("ya se ha montado el componente")
  // }
  // componentWillUnmount() {
  //   // alert("me voy a desmonatar")
  // }
  render() {
    var pStyle = {
      background: 'green',
      color: 'white',
      padding: '10px'
    }
    var favorita;
    if (this.state.favorita.titulo) {
      favorita = (
        <p className="favorita"
          style={pStyle}>
          <strong>La pelicula favorita es : </strong>
          <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favorita = (
        <p>NO HAY PELICULA FAVORITA</p>
      )
    }
    return (
      <React.Fragment>

        <Slider
          title="Peliculas"
          size="slider-small" />
        <div className="center">

          <div id="content" className="peliculas">
            <h2 className="subheader">Listado de peliculas</h2>
            <p>Eleccion de las peliculas favoritas de: {this.state.nombre}</p>
            <p><button onClick={this.cambiartitulo} >cambiar titulo</button></p>
            {/* {
          this.state.favorita.titulo ? (

            <p className="favorita"
              style={pStyle}>
              <strong>La pelicula favorita es : </strong>
              <span>{this.state.favorita.titulo}</span>
            </p>
          ) : (
              <p>NO HAY PELICULA FAVORITA</p>
            )
        } */}
            {favorita}
            {/* crear componente peliculas */}
            <div id="article" className="peliculas">

              {
                this.state.peliculas.map((pelicula, i) => {
                  return (
                    <Pelicula key={i} pelicula={pelicula} indice={i} marcarFavorita={this.favorita} />
                  )
                })
              }
            </div>
            <Sidebar
              blog="false" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Peliculas;

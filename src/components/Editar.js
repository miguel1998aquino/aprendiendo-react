import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator'
import swal from 'sweetalert'
import axios from 'axios';
import Global from '../Global'
import Sidebar from './Sidebar';

// 1.- tenemos que recoger el id del articulo a editar de la url
//2.-crear un metodo para sacar el objeto del backend
//3.-rellenar el formulario con estos datos
//4.- actualizar el objeto con una peticion ajax

class Editar extends Component {
    url = Global.url;
    articleId = null;

    titleRef = React.createRef();
    contentRef = React.createRef();
    state = {
        article: {},
        status: null,
        selectedFile: null
    }
    componentWillMount() {
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido'
            }
        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                });

            })
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.titleRef.current.value,
                image:this.state.article.image
            }
        })
        this.validator.showMessages();
        this.forceUpdate();
    }
    saveArticle = (e) => {
        e.preventDefault();

        //rellenar state con formulario
        this.changeState();
        //hacer una peticion para guardar  el articulo
        if (this.validator.allValid()) {

            axios.put(this.url +'article/'+this.articleId, this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                            //subir la imagen
                        })
                        swal(
                            'Articulo creado',
                            'El Articulo se ah Creado con Gran exito',
                            'success'
                        )
                        if (this.state.selectedFile != null) {
                            //saco el id 
                            var articleId = this.state.article._id;
                            //crear el from data y añadir al fichero
                            const formData = new FormData();
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            )
                            //peticion ajax
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        })
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        })
                                    }
                                })
                        } else {
                            this.setState({
                                status: 'success'
                            })
                        }
                    } else {
                        this.setState({
                            status: 'failed'
                        })
                    }
                })
        } else {
            this.setState({
                status: 'failed'
            })
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    FileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    render() {
        if (this.state.status === 'success') {
            return <Redirect to="/blog" />;
        }
        var article = this.state.article
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Articulo</h1>
                    {
                        this.state.article.title &&
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />
                                {
                                    this.validator.message('title', this.state.article.title, 'required|alpha_num_space')
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>
                                {
                                    this.validator.message('content', this.state.article.content, 'required')
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.FileChange} />
                                <div className="image-wrap">
                                    {
                                        article.image !== null ? (
                                            <img src={this.url + 'get-image/' + article.image} alt={article.title} className="thumb"/>
                                        ) : (
                                                <img src="https://www.solvetic.com/uploads/monthly_06_2016/post-821-0-39311200-1467317041.jpg" alt={article.title} className="thumb"/>
                                            )
                                    }
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </form>
                    }
                    {
                        !this.state.article.title &&
                        <h1 className="subheader">Cargando....</h1>
                    }



                </section>
                <Sidebar />
            </div>
        )
    }
}

export default Editar;
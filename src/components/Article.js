import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar'
import Global from '../Global'
import Moment from 'react-moment'
import 'moment/locale/es'
class Article extends Component {
    url = Global.url;
    state = {
        article: false,
        status: null
    }


    componentWillMount() {
        this.getArticle();
    }
    getArticle = () => {
        var id = this.props.match.params.id
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            }).catch(err=>{
                this.setState({
                    article: false,
                    status: 'success'
                })
            })
    }
    render() {
        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">
                    {
                        this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                            {
                                article.image !== null ?(
                                    <img src={this.url+'get-image/'+article.image} alt={article.title} />
                                ) :(
                                    <img src="https://www.solvetic.com/uploads/monthly_06_2016/post-821-0-39311200-1467317041.jpg" alt={article.title} />
                                )
                            }
                            </div>
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date"><Moment locale="es" fromNow>{article.date}</Moment></span>
                            <p>
                                {article.content}
                            </p>
                            <a href="j" className="btn btn-danger">Eliminar</a>
                            <a href="j" className="btn btn-warning">Editar</a>
                            <div className="clearfix"></div>
                        </article>
                    }
                    {
                        !this.state.article && this.state.status === 'success'&&
                        <div id="article">
                            <h2 clasName="subheader">El articulo no existe</h2>
                            <p>intentelo mas tarde</p>
                        </div>
                    }
                    {
                        !this.state.articles === null &&
                        <div id="article">
                            <h2 clasName="subheader">Cargando.......</h2>
                            <p>Espere unos segundos</p>
                        </div>
                    }
                </section>
                <Sidebar />
            </div>
        )
    }
}
export default Article;
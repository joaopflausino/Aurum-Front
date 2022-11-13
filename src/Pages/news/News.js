import { React, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import './news.css';

function News() {

  let [value, setValue] = useState("");


  async function APIGET() {
    let response = await fetch("https://newsapi.org/v2/everything?q=mercado-financeiro&from=2022-11-11&to=2022-11-11&sortBy=popularity&apiKey=572353a32aed49179c9463f5eee0e609");
    let result = await response.json();

    const news = result.articles.slice(0, 10).map(noticia => {
      return <a className="noticia" href={noticia.url}>
        <div className="imagem-not">
          <img className="imagem-noticia" src={noticia.urlToImage} />
        </div>
        <div className="texto-noticia">
          <div className="titulo-noticia">{noticia.title}</div>
          <div className="subtitulo-noticia">{noticia.description}</div>
        </div>
      </a>
    });

    setValue(news);
  }

  useEffect(() => {
    APIGET();
  }, [])

  useEffect(() => {
    document.title = "Notícias"
  }, []);

  return (
    <>
      <Navbar />
      <div className='container-noticia'>
        <h3 className='h3-noticias-do-dia'>Notícias do dia</h3>
        <div className='noticias'>{value}</div>
      </div>
    </>
  );
}

export default News;
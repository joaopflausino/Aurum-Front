import { React, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "./news.css";

function News() {
  let [value, setValue] = useState("");

  async function APIGET() {
    let response = await fetch(
      "https://newsapi.org/v2/everything?q=mercado-financeiro&from=2022-11-11&to=2022-11-11&sortBy=popularity&apiKey=572353a32aed49179c9463f5eee0e609"
    );
    let result = await response.json();

    const news = result.articles.slice(0, 10).map((noticia) => {
      return (
        <a className="single-news" href={noticia.url}>
          <div className="image">
            <img className="img-news" src={noticia.urlToImage} />
          </div>
          <div className="text">
            <div className="news-title">{noticia.title}</div>
            <div className="news-subtitle">{noticia.description}</div>
          </div>
        </a>
      );
    });

    setValue(news);
  }

  useEffect(() => {
    APIGET();
  }, []);

  useEffect(() => {
    document.title = "Aurum Investing";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-news">
        <div className="news">{value}</div>
      </div>
    </>
  );
}

export default News;

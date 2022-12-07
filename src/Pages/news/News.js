import { render } from "@testing-library/react";
import { useEffect } from "react";
import React from "react";
import { AuthContext } from "../../main/ProvedorDeAutentificacao";

import "./news.css";
import { useState } from "react";
import Navbar from "../../components/Navbar";

function News() {
  let [value, setValue] = useState("");

  async function APIGET() {
    let response = await fetch(
      "https://newsapi.org/v2/everything?q=financeiro&apiKey=572353a32aed49179c9463f5eee0e609"
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

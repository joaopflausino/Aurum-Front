import { React, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import './news.css';

function News() {

  let [value, setValue] = useState("joao");


  async function APIGET() {
    let response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=5a7f60e7d5164715bef3a0f5b0b0301d");
    let result = await response.json();
    console.log(result)
    console.log(result.articles);
    let p = result.articles.map((a) => {
      return <div class="p-8">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={a.urlToImage} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{a.title}</div>
            <p class="text-gray-700 text-base">
              {a.description}
            </p>
            <button class="font-bold text-xl mb-2"> <a href={a.url}>Read more</a></button>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coding</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Akhilesh</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AI</span>
          </div>
        </div>
      </div>
    });
    console.log(p);
    setValue(p);
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
      <div className='news'>
        <h3>News {value}</h3>
      </div>
    </>

  );
}

export default News;
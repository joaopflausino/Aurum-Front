import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "./home.css";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

//⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  NOTICIAS CARROSSEL  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇧⇧⇧⇧
const items = [
  {
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];
//⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  //RECEBE AS AÇÕES
  let [stock1, setStock1] = useState("");
  let [stock2, setStock2] = useState("");
  let [stock4, setStock4] = useState("");
  let [stock5, setStock5] = useState("");

  ///⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  API POR AÇÃO  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩

  async function APIGET() {
    //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  APPLE  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
    let response = await fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=GL7OCY3JYIA7LDPG"
    );
    let result = await response.json();
    const stock1_price = parseFloat(result["Global Quote"]["05. price"]);
    const stock1_gain = parseFloat(result["Global Quote"]["09. change"]);
    const stock1_variation = parseFloat(result["Global Quote"]["10. change percent"]).toFixed(2);
    if (stock1_gain >= 0) {
      var stock1 = (
        <>
          <div className="stock-div-price">$ {stock1_price}</div>
          <div className="gain-variation1">
            <div className="stock-div-gain">{stock1_gain}</div>
            <div>({stock1_variation}%)</div>
          </div>
        </>
      );
    } else {
      var stock1 = (
        <>
          <div className="stock-div-price">$ {stock1_price}</div>
          <div className="gain-variation2">
            <div className="stock-div-gain">{stock1_gain}</div>
            <div>({stock1_variation}%)</div>
          </div>
        </>
      );
    }
    setStock1(stock1);

    //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  TESLA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
    let response2 = await fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TSLA&apikey=GL7OCY3JYIA7LDPG"
    );
    let result2 = await response2.json();
    const stock2_price = parseFloat(result2["Global Quote"]["05. price"]);
    const stock2_gain = parseFloat(result2["Global Quote"]["09. change"]);
    const stock2_variation = parseFloat(result2["Global Quote"]["10. change percent"]).toFixed(2);
    if (stock2_gain >= 0) {
      var stock2 = (
        <>
          <div className="stock-div-price">$ {stock2_price}</div>
          <div className="gain-variation1">
            <div className="stock-div-gain">{stock2_gain}</div>
            <div>({stock2_variation}%)</div>
          </div>
        </>
      );
    } else {
      var stock2 = (
        <>
          <div className="stock-div-price">$ {stock2_price}</div>
          <div className="gain-variation2">
            <div className="stock-div-gain">{stock2_gain}</div>
            <div>({stock2_variation}%)</div>
          </div>
        </>
      );
    }
    setStock2(stock2);

    //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  NVIDIA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
    let response4 = await fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NVDA&apikey=GL7OCY3JYIA7LDPG"
    );
    let result4 = await response4.json();
    const stock4_price = parseFloat(result4["Global Quote"]["05. price"]);
    const stock4_gain = parseFloat(result4["Global Quote"]["09. change"]);
    const stock4_variation = parseFloat(result4["Global Quote"]["10. change percent"]).toFixed(2);
    if (stock4_gain >= 0) {
      var stock4 = (
        <>
          <div className="stock-div-price">$ {stock4_price}</div>
          <div className="gain-variation1">
            <div className="stock-div-gain">{stock4_gain}</div>
            <div>({stock4_variation}%)</div>
          </div>
        </>
      );
    } else {
      var stock4 = (
        <>
          <div className="stock-div-price">$ {stock4_price}</div>
          <div className="gain-variation2">
            <div className="stock-div-gain">{stock4_gain}</div>
            <div>({stock4_variation}%)</div>
          </div>
        </>
      );
    }
    setStock4(stock4);

    //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  NETFLIX  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
    let response5 = await fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NFLX&apikey=GL7OCY3JYIA7LDPG"
    );
    let result5 = await response5.json();
    const stock5_price = parseFloat(result5["Global Quote"]["05. price"]);
    const stock5_gain = parseFloat(result5["Global Quote"]["09. change"]);
    const stock5_variation = parseFloat(result5["Global Quote"]["10. change percent"]).toFixed(2);
    if (stock5_gain >= 0) {
      var stock5 = (
        <>
          <div className="stock-div-price">$ {stock5_price}</div>
          <div className="gain-variation1">
            <div className="stock-div-gain">{stock5_gain}</div>
            <div>({stock5_variation}%)</div>
          </div>
        </>
      );
    } else {
      var stock5 = (
        <>
          <div className="stock-div-price">$ {stock5_price}</div>
          <div className="gain-variation2">
            <div className="stock-div-gain">{stock5_gain}</div>
            <div>({stock5_variation}%)</div>
          </div>
        </>
      );
    }
    setStock5(stock5);
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
      <div className="main-home">
        <div className="container-cima"></div>
        <div className="container-meio">
          <div className="container-meio-esquerda">
            <div class="row justify-content-md-center">
              <div class="col-md-auto">
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">AAPL</h3>
                    <h3 className="stock-name">Apple</h3>
                    <div className="stock-num">{stock1}</div>
                  </div>
                  <div>
                    <img className="img-stock" src="https://br.advfn.com/common/images/company/N_AAPL.png"></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">NFLX</h3>
                    <h3 className="stock-name">Netflix</h3>
                    <div className="stock-num">{stock5}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/7/Netflix-Logo-PNG-HD-Quality.png"
                    ></img>
                  </div>
                </div>
              </div>
              <div class="col-md-auto">
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">NVDA</h3>
                    <h3 className="stock-name">NVIDIA</h3>
                    <div className="stock-num">{stock4}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/13/Nvidia-Transparent-File.png"
                    ></img>
                  </div>
                </div>

                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">TSLA</h3>
                    <h3 className="stock-name">Tesla</h3>
                    <div className="stock-num">{stock2}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-meio-direita"></div>
        </div>
        <div className="container-baixo">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;

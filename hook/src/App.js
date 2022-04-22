import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import CardHook from "./Hook/CardHook";
import NavbarHook from "./Hook/NavbarHook";
import SearchHook from "./Hook/SearchHook";

const App = () => {
  let [keyword, setKeyword] = useState("atlet");
  let [news, setNews] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("get API");

    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=2022-03-22&sortBy=publishedAt&apiKey=229fa3df3d624ffb835d2a51ec7779c9`);
        const news = await response.json();
        setNews(news.articles);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [keyword]);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <NavbarHook />
      <SearchHook seacrhText={(text) => setKeyword(text)} />
      {isLoading ? (
        <div style={style}>
          <BallTriangle color="green" height={80} width={80} />
        </div>
      ) : (
        <CardHook cardHook={news} />
      )}
    </div>
  );
};

export default App;

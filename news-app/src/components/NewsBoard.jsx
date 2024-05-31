import { useEffect, useState } from "react";
import NewsItem from './NewsItem';

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c11d88413ecc467ab6c313e4fff91882`;

    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=c11d88413ecc467ab6c313e4fff91882`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category, searchQuery]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
}

export default NewsBoard;
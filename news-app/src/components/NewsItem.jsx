import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", height: "100%" }}>
      <img src={src ? src : image} style={{ maxHeight: "200px", objectFit: "cover" }} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : ""}</p>
        <a href={url} className="btn btn-primary mt-auto">Read more</a>
      </div>
    </div>
  );
}

export default NewsItem;
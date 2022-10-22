import "./NewsCard.css";
import TagList from "./TagList";

export default function NewsCard(props) {
  const { newsData } = props;
  return (
    <div className="news-container">
      <div className="news-header">
        <TagList tagList={newsData.tags} />
        <div className="news-time">{newsData.time}</div>
      </div>
      <div className="news-title">{newsData.title}</div>
      <div className="news-text">{newsData.text}</div>
    </div>
  );
}

import "./NewsAndEvents.css";
import NewsCard from "./NewsCard";
import { newsData } from "../data/newsData";

export default function NewsAndEvents() {
  return (
    <div>
      <div className="news-button-container">
        <button className="button-selected">News</button>
        <button className="button-unselected">Events</button>
      </div>
      <div>
        <NewsCard newsData={newsData.ONEX} />
        <NewsCard newsData={newsData.WJA} />
        <NewsCard newsData={newsData.DJI} />
      </div>
    </div>
  );
}

import "./TagList.css";

export default function TagList(props) {
  const { tagList } = props;
  return (
    <div>
      {tagList.map((element) => (
        <div className={element === "AC" ? "tag-blue" : "tag-orange"}>
          {element}
        </div>
      ))}
      <div className="tag-white">...</div>
    </div>
  );
}

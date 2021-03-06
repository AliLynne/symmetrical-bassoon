import { useEffect, useState } from "react";

import jsonData from "../sampleData.json";
const loadData = () => JSON.parse(JSON.stringify(jsonData));

const TagsList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const loadedTags = loadData().tags;
    setTags(loadedTags);
  }, []);
  return (
    <ul>{tags && tags.map((tag) => <li key={tag.id}>{tag.title}</li>)}</ul>
  );
};

export default TagsList;

import React, { useState, useEffect } from "react";
import { AutoSuggest } from "react-autosuggestions";

import jsonData from "../sampleData.json";
const loadData = () => JSON.parse(JSON.stringify(jsonData));

const AddTagForm = () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The tag selected was ${tag}`);
    setTag("");
  };

  useEffect(() => {
    const loadedTags = loadData().tags;
    const tagNamesArray = [];
    loadedTags.forEach((tag) => tagNamesArray.push(tag.title));
    setTags(tagNamesArray);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <AutoSuggest
        name="tag"
        options={tags}
        handleChange={setTag}
        value={tag}
      />
      <button>Save New Tag</button>
    </form>
  );
};

export default AddTagForm;

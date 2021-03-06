import React, { useState, useEffect } from "react";
import { AutoSuggest } from "react-autosuggestions";

import jsonData from "../sampleData.json";
const loadData = () => JSON.parse(JSON.stringify(jsonData));

const AddTagForm = () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [useDateNow, setUseDateNow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The tag was ${tag}. Used current DateTime: ${useDateNow}`);
    setTag("");
  };

  useEffect(() => {
    const loadedTags = loadData().tags;
    const tagNamesArray = [];
    loadedTags.forEach((tag) => tagNamesArray.push(tag.title));
    setTags(tagNamesArray);
  }, []);

  return (
    <form className="addTagEventForm" onSubmit={handleSubmit}>
      <AutoSuggest
        name="tag"
        options={tags}
        handleChange={setTag}
        value={tag}
      />
      <label className="addTagEventForm__checkbox">
        Use current date and time
        <input
          type="checkbox"
          value={useDateNow}
          checked={useDateNow}
          onChange={() => setUseDateNow(!useDateNow)}
        />
      </label>

      <button>Add Tag</button>
    </form>
  );
};

export default AddTagForm;

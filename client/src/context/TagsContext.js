import React, { createContext, useEffect, useState } from "react";
import jsonData from "../sampleData.json";
const loadData = () => JSON.parse(JSON.stringify(jsonData));

export const TagsContext = createContext();

const TagsContextProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadedTags = loadData().tags;
    const loadedEvents = loadData().events;
    setTags(loadedTags);
    setEvents(loadedEvents);
  }, []);

  return (
    <TagsContext.Provider value={{ tags, setTags, events, setEvents }}>
      {children}
    </TagsContext.Provider>
  );
};

export default TagsContextProvider;

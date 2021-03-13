import React, { useContext } from "react";

import { TagsContext } from "../context/TagsContext";

const TagsByEvent = () => {
  const { tags } = useContext(TagsContext);

  return (
    <>
      <h2>Events by Tag</h2>
      <ul>
        {tags &&
          tags.map((tag) => {
            return (
              <li key={tag.id}>
                <p>Title: {tag.title}</p>
                <ul>
                  {tag.events.map((event) => {
                    const date = new Date(event.dateTime * 1000);
                    const month = date.toLocaleString("default", {
                      month: "long",
                    });
                    const dateString = `${month} ${date.getDay()}, ${date.getFullYear()}`;
                    console.log(date.Date);
                    return <p>{dateString}</p>;
                  })}
                </ul>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default TagsByEvent;

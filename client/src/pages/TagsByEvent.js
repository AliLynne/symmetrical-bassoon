import React, { useContext } from "react";

import { TagsContext } from "../context/TagsContext";

const TagsByEvent = () => {
  const { events } = useContext(TagsContext);
  return (
    <ul>
      {events &&
        events.map((event) => {
          const date = new Date(event.dateTime * 1000);
          const month = date.toLocaleString("default", {
            month: "long",
          });
          const dateString = `${month} ${date.getDay()}, ${date.getFullYear()}`;

          return (
            <li key={event.id}>
              <p>Time: {dateString}</p>
              <ul>
                {event.tags.map((tag) => (
                  <p key={tag.id}>{tag.title}</p>
                ))}
              </ul>
            </li>
          );
        })}
    </ul>
  );
};

export default TagsByEvent;

import React from "react";
import styles from "./Search.module.scss";

const tags = [
  {
    tagName: "tag1",
    id: 1
  },
  {
    tagName: "tag2",
    id: 2
  },

  {
    tagName: "tag3",
    id: 3
  },
  {
    tagName: "tag4",
    id: 4
  },
  {
    tagName: "tag5",
    id: 5
  },

];

const Search = () => {
  return (
    <div>
      <div className={styles.tag_box}></div>
    </div>
  );
};

export default Search;

import React from "react";
import styles from "./Search.module.scss";
import { RxCross2 } from "react-icons/rx";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import { IoIosAdd } from "react-icons/io";
import { FetchSearchQuery } from "../../api/Search";
import SearchResults from "../../components/SearchResults/SearchResults";

type tag = {
  tagName: string;
  id: string;
};

const Search = () => {
  const [tagsList, setTagsList] = React.useState<tag[]>([]);
  const [newTag, setnewTag] = React.useState("");
  const fetchResult = FetchSearchQuery();

  const handleSearch = () => {
    console.log("calling");

    const newArray: string[] = [];
    tagsList.map((tags, index) => {
      newArray.push(tags.tagName);
    });

    console.log(newArray);

    fetchResult.mutateAsync(newArray, {
      onSuccess: (d) => {
        console.log(d);
      },
    });
  };

  const handleOnDragEnd = (result: any) => {
    const items = Array.from(tagsList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTagsList(items);
  };

  const handleDelete = (index: number) => {
    const newList = Array.from(tagsList);
    newList.splice(index, 1);
    setTagsList(newList);
  };

  const handleAddTags = () => {
    const newList = Array.from(tagsList);
    if (newTag !== "") {
      newList.push({ tagName: newTag, id: newTag });
      setTagsList(newList);
      setnewTag("");
    }
  };

  // const handleSearch =() => {
  //   useFetchSearchQuery(tagsList)
  // }

  return (
    <div className={styles.parentContainer}>
      <div className={styles.search_container}>
        <div className={styles.search_box}>
          <h5>Search Box</h5>
          <div className={styles.input_section}>
            <input
              onChange={(event) => {
                setnewTag(event.target.value);
              }}
              value={newTag}
              className={styles.input_field}
              placeholder="Search Tags"
            ></input>
            <IoIosAdd
              onClick={() => {
                handleAddTags();
              }}
              style={{
                backgroundColor: "rgb(220, 220, 220)",
                fontSize: "1.5rem",
                borderRadius: "8px",
                padding: "0.5rem",
                color: "blue",
              }}
            />
          </div>
          <button className={styles.button} onClick={() => handleSearch()}>
            Search
          </button>
        </div>
        <div className={styles.tag_container}>
          <h5>Tag Box</h5>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="tags">
              {(provided) => (
                <div
                  className={styles.tag_box}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {tagsList.map((tag, index) => {
                    return (
                      <Draggable
                        index={index}
                        draggableId={tag.id}
                        key={tag.id}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className={styles.tag}
                          >
                            <span>{tag.tagName}</span>
                            <RxCross2
                              onClick={() => {
                                handleDelete(index);
                              }}
                              style={{
                                backgroundColor: "rgb(180, 180, 180)",
                                borderRadius: "25px",
                                padding: "1px",
                              }}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <div className={styles.results_container}>
        <SearchResults />
      </div>
    </div>
  );
};

export default Search;

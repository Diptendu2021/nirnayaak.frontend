import React from "react";
import styles from "./Search.module.scss";
import { RxCross2 } from "react-icons/rx";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import { IoIosAdd } from "react-icons/io";
import { FetchSearchQuery } from "../../api/Search";
import SearchResults from "../../components/SearchResults/SearchResults";
import ResultCard from "../../components/ResultCard/ResultCard";

type tag = {
  tagName: string;
  id: string;
};

const Search = () => {
  const [tagsList, setTagsList] = React.useState<tag[]>([]);
  const [newTag, setnewTag] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const [firstSearch , setFirstSearch] = React.useState(true)
  const fetchResult = FetchSearchQuery();

  const handleSearch = () => {
    console.log("calling");

    const newArray: string[] = [];
    tagsList.map((tags, index) => {
      newArray.push(tags.tagName);
    });

    console.log(newArray);

    fetchResult.mutateAsync(newArray, {
      onSuccess: (data) => {
        console.log(data?.data?.docs);

        const docsData = data?.data?.docs;

        setSearchData(docsData);

        // setSearchData(data?.data?.docs)
        // console.log(searchData);
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
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.search_container}>
          <div className={styles.search_box}>
            <h5>Search </h5>
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
              title="Add Tags"
                onClick={() => {
                  handleAddTags();
                }}
                style={{
                  backgroundColor: "rgb(220, 220, 220)",
                  fontSize: "1.5rem",
                  borderRadius: "25px",
                  padding: "0.5rem",
                  color: "blue",
                  cursor: "pointer"
                }}
              />
            </div>
            <button
              className={`${styles.button} button`}
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </div>
          <div className={styles.tag_container}>
            <h5>Your Tags</h5>
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
                                  backgroundColor: "#a0bcfd",
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
         
          <h3>Your Searches</h3>
          {/* {
            searchData.length === 0 ? 
            <div> no data <div/>
            :
            (
              <>
              
              </>
            )
          } */}
          <div className={styles.results}>
                  {
                  searchData.map((data , index) => {
                    return (
                      <ResultCard key={index} data = {data}/>
                    )
                  })
                }
              </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Search;

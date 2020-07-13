import React, { useState, useLayoutEffect } from "react";
import GlobalStyle from "./styles/global";
import JobPost from "./components/jobPost/JobPost";
import Header from "./components/header/Header";

import { dummyJobs } from "./dummyData/dummyJobs";

function App() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [viewportSize, setViewPortSize] = useState(window.innerWidth);

  const handleFilteredItems = (item) => {
    let filteredArray = [...filteredItems];
    filteredArray.includes(item)
      ? filteredArray.splice(filteredArray.indexOf(item), 1)
      : filteredArray.push(item);
    setFilteredItems(filteredArray);
  };

  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setViewPortSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return viewportSize;
  }

  useWindowSize();

  return (
    <>
      <GlobalStyle />
      <Header
        filteredItems={filteredItems}
        handleFilteredItems={handleFilteredItems}
        setFilteredItems={setFilteredItems}
        viewportSize={viewportSize}
      />
      <JobPost
        dummyJobs={dummyJobs}
        filteredItems={filteredItems}
        handleFilteredItems={handleFilteredItems}
        viewportSize={viewportSize}
      />
    </>
  );
}

export default App;

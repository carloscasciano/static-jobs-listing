import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import JobPost from "./components/jobPost/JobPost";
import Header from "./components/header/Header";

import { dummyJobs } from "./dummyData/dummyJobs";
console.log(dummyJobs)

function App() {
  const [filteredItems, setFilteredItems] = useState([]);

  const handleFilteredItems = (item) => {
    let filteredArray = [...filteredItems];
    filteredArray.includes(item)
      ? filteredArray.splice(filteredArray.indexOf(item), 1)
      : filteredArray.push(item);
    setFilteredItems(filteredArray);
  };

  return (
    <>
      <GlobalStyle />
      <Header 
        filteredItems={filteredItems}
        handleFilteredItems={handleFilteredItems}
        setFilteredItems={setFilteredItems}
      />
      <JobPost
        dummyJobs={dummyJobs}
        filteredItems={filteredItems}
        handleFilteredItems={handleFilteredItems}
      />
    </>
  );
}

export default App;

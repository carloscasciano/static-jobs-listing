import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import JobPost from "./components/jobPost/JobPost";
import Header from "./components/header/Header";

import { dummyJobs } from "./dummyData/dummyJobs";
console.log(dummyJobs);

function App() {
  const [filteredLevels, setFilteredLevel] = useState([]);
  const [filteredRoles, setFilteredRole] = useState([]);
  const [filteredLanguages, setFilteredLanguages] = useState([]);

  const handleFilteredItems = (section, item) => {
    let filteredArray = [...section];
    filteredArray.includes(item)
      ? filteredArray.splice(filteredArray.indexOf(item), 1)
      : filteredArray.push(item);

    section === filteredLevels
      ? setFilteredLevel(filteredArray)
      : section === filteredRoles
      ? setFilteredRole(filteredArray)
      : setFilteredLanguages(filteredArray);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <JobPost 
        dummyJobs={dummyJobs}
        filteredLevels={filteredLevels}
        filteredRoles={filteredRoles}
        filteredLanguages={filteredLanguages}
        handleFilteredItems={handleFilteredItems}
      />

      

      
    </>
  );
}

export default App;

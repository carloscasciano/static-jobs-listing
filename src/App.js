import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import JobPost from "./components/jobPost/JobPost";
import Header from "./components/header/Header";
import Tablet from "./components/tablet/Tablet";
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
      <JobPost />

      {filteredLevels.map((i) => (
        <p key={Math.random()}>{i}</p>
      ))}
      {filteredRoles.map((i) => (
        <p key={Math.random()}>{i}</p>
      ))}
      {filteredLanguages.map((i) => (
        <p key={Math.random()}>{i}</p>
      ))}

      {dummyJobs.map((j) => (
        <div key={Math.random()}>
          <p>{j.company}</p>
          <p>{j.position}</p>
          <Tablet
            handleFilteredItems={handleFilteredItems}
            name={j.level}
            section={filteredLevels}
          ></Tablet>
          <Tablet
            handleFilteredItems={handleFilteredItems}
            name={j.role}
            section={filteredRoles}
          ></Tablet>
          {j.languages.map((l) => (
            <div key={Math.random()}>
              <Tablet
                handleFilteredItems={handleFilteredItems}
                name={l}
                section={filteredLanguages}
              ></Tablet>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;

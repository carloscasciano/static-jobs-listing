import React from "react";
import Tablet from "../tablet/Tablet";

export default function JobPost({
  dummyJobs,
  filteredLevels,
  filteredRoles,
  filteredLanguages,
  handleFilteredItems,
}) {
  console.log(dummyJobs);
  return (
    <div>
      <p>Job Post</p>
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
    </div>
  );
}

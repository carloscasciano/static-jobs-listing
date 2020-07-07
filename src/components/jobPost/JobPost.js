import React from "react";
import Tablet from "../tablet/Tablet";
import { filteredJobArrayBuilder } from "../../resources/filteredJobArrayBuilder";
import { checkArraySubset } from "../../resources/checkArraySubset";

export default function JobPost({
  dummyJobs,
  filteredItems,
  handleFilteredItems,
}) {
  console.log(filteredJobArrayBuilder(dummyJobs[0]));

  console.log(
    checkArraySubset(filteredItems, filteredJobArrayBuilder(dummyJobs[0]))
  );

  return filteredItems.length === 0 ? (
    <div>
      <p>Job Posts:</p>
      {dummyJobs.map((j) => (
        <div key={Math.random()}>
          <p>{j.company}</p>
          <p>{j.position}</p>
          <Tablet
            handleFilteredItems={handleFilteredItems}
            name={j.level}
          ></Tablet>
          <Tablet
            handleFilteredItems={handleFilteredItems}
            name={j.role}
          ></Tablet>
          {j.languages.map((l) => (
            <div key={Math.random()}>
              <Tablet
                handleFilteredItems={handleFilteredItems}
                name={l}
              ></Tablet>
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <div>
      <p>Job Posts:</p>
      <p>oi</p>
      {dummyJobs
        .filter((j) =>
          checkArraySubset(filteredItems, filteredJobArrayBuilder(j))
        )
        .map((j) => (
          <div key={Math.random()}>
            <p>{j.company}</p>
            <p>{j.position}</p>
            <Tablet
              handleFilteredItems={handleFilteredItems}
              name={j.level}
            ></Tablet>
            <Tablet
              handleFilteredItems={handleFilteredItems}
              name={j.role}
            ></Tablet>
            {j.languages.map((l) => (
              <div key={Math.random()}>
                <Tablet
                  handleFilteredItems={handleFilteredItems}
                  name={l}
                ></Tablet>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

/* 
  return (
    filteredLevels === [] && filteredRoles === [] && filteredLanguages === [] ? 
    
   : <p>beep</p>

 */

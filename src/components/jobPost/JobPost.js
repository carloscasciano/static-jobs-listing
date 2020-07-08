import React from "react";
import JobTablet from "../tablet/JobTablet";
import { filteredJobArrayBuilder } from "../../resources/filteredJobArrayBuilder";
import { checkArraySubset } from "../../resources/checkArraySubset";
import {
  JobPostDashboardContainer,
  JobPostContainer,
  CompanyContainer,
  TabletsContainer,
  LogoContainer,
  CompanyInfoContainer,
  CompanyNameContainer,
  JobNameContainer,
  ExtraInfoContainer
} from "./jobPostStyles";

export default function JobPost({
  dummyJobs,
  filteredItems,
  handleFilteredItems,
}) {
  return filteredItems.length === 0 ? (
    <>
      <JobPostDashboardContainer>
        <JobPostContainer>
          <CompanyContainer>
            <LogoContainer>
              <img src={"./images/insure.svg"} alt={"company"} />
            </LogoContainer>
            <CompanyInfoContainer>
              <CompanyNameContainer>
                <p>Company Name</p>
                <div className="new">
                  <p>NEW!</p>
                </div>
                <div className="featured">
                  <p>FEATURED</p>
                </div>
              </CompanyNameContainer>
              <JobNameContainer>
                <p>Job Name is Here</p>
              </JobNameContainer>
              <ExtraInfoContainer>
                <p>1 day ago</p>
                <p>•</p>
                <p>Contract</p>
                <p>•</p>
                <p>Location</p>
              </ExtraInfoContainer>
            </CompanyInfoContainer>
          </CompanyContainer>
          <TabletsContainer>
            <JobTablet name={"Test"} />
            <JobTablet name={"Test"} />
            <JobTablet name={"Test"} />
          </TabletsContainer>
        </JobPostContainer>
        <p>Job Posts:</p>
        {dummyJobs.map((j) => (
          <div key={Math.random()}>
            <p>{j.company}</p>
            <p>{j.position}</p>
            <JobTablet
              handleFilteredItems={handleFilteredItems}
              name={j.level}
            ></JobTablet>
            <JobTablet
              handleFilteredItems={handleFilteredItems}
              name={j.role}
            ></JobTablet>
            {j.languages.map((l) => (
              <div key={Math.random()}>
                <JobTablet
                  handleFilteredItems={handleFilteredItems}
                  name={l}
                ></JobTablet>
              </div>
            ))}
          </div>
        ))}
      </JobPostDashboardContainer>
    </>
  ) : (
    <JobPostDashboardContainer>
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
            <JobTablet
              handleFilteredItems={handleFilteredItems}
              name={j.level}
            ></JobTablet>
            <JobTablet
              handleFilteredItems={handleFilteredItems}
              name={j.role}
            ></JobTablet>
            {j.languages.map((l) => (
              <div key={Math.random()}>
                <JobTablet
                  handleFilteredItems={handleFilteredItems}
                  name={l}
                ></JobTablet>
              </div>
            ))}
          </div>
        ))}
    </JobPostDashboardContainer>
  );
}

/* 
  return (
    filteredLevels === [] && filteredRoles === [] && filteredLanguages === [] ? 
    
   : <p>beep</p>

 */

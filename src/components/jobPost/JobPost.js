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
  ExtraInfoContainer,
} from "./jobPostStyles";

export default function JobPost({
  dummyJobs,
  filteredItems,
  handleFilteredItems,
}) {
  return filteredItems.length === 0 ? (
    <>
      <JobPostDashboardContainer>
        {dummyJobs.map((j) => (
          <JobPostContainer key={Math.random()}>
            {j.featured === true ? <div className="featuredBar" /> : <></>}
            <CompanyContainer>
              <LogoContainer>
                <img src={j.logo} alt={"company"} />
              </LogoContainer>
              <CompanyInfoContainer>
                <CompanyNameContainer>
                  <p>{j.company}</p>
                  {j.new === true ? (
                    <div className="new">
                      <p>NEW!</p>
                    </div>
                  ) : (
                    <></>
                  )}

                  {j.featured === true ? (
                    <div className="featured">
                      <p>FEATURED</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </CompanyNameContainer>
                <JobNameContainer>
                  <p>{j.position}</p>
                </JobNameContainer>
                <ExtraInfoContainer>
                  <p>{j.postedAt}</p>
                  <p>•</p>
                  <p>{j.contract}</p>
                  <p>•</p>
                  <p>{j.location}</p>
                </ExtraInfoContainer>
              </CompanyInfoContainer>
            </CompanyContainer>
            <TabletsContainer>
              {filteredJobArrayBuilder(j).map((t) => (
                <div key={Math.random()}>
                  <JobTablet
                    name={t}
                    handleFilteredItems={handleFilteredItems}
                  />
                </div>
              ))}
            </TabletsContainer>
          </JobPostContainer>
        ))}
      </JobPostDashboardContainer>
    </>
  ) : (
    <JobPostDashboardContainer>
      {dummyJobs
        .filter((j) =>
          checkArraySubset(filteredItems, filteredJobArrayBuilder(j))
        )
        .map((j) => (
          <JobPostContainer key={Math.random()}>
            {j.featured === true ? <div className="featuredBar" /> : <></>}
            <CompanyContainer>
              <LogoContainer>
                <img src={j.logo} alt={"company"} />
              </LogoContainer>
              <CompanyInfoContainer>
                <CompanyNameContainer>
                  <p>{j.company}</p>
                  {j.new === true ? (
                    <div className="new">
                      <p>NEW!</p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {j.featured === true ? (
                    <div className="featured">
                      <p>FEATURED</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </CompanyNameContainer>
                <JobNameContainer>
                  <p>{j.position}</p>
                </JobNameContainer>
                <ExtraInfoContainer>
                  <p>{j.postedAt}</p>
                  <p>•</p>
                  <p>{j.contract}</p>
                  <p>•</p>
                  <p>{j.location}</p>
                </ExtraInfoContainer>
              </CompanyInfoContainer>
            </CompanyContainer>
            <TabletsContainer>
              {filteredJobArrayBuilder(j).map((t) => (
                <div key={Math.random()}>
                  <JobTablet
                    name={t}
                    handleFilteredItems={handleFilteredItems}
                  />
                </div>
              ))}
            </TabletsContainer>
          </JobPostContainer>
        ))}
    </JobPostDashboardContainer>
  );
}

/* 
  return (
    filteredLevels === [] && filteredRoles === [] && filteredLanguages === [] ? 
    
   : <p>beep</p>

 */

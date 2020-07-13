import styled from "styled-components";
const mediaShift = "600px";

export const JobPostDashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JobPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 155px;
  width: 80%;
  min-width: 80%;
  background-color: white;
  margin: 15px 0 15px 0;
  border-radius: 10px;
  -webkit-box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
  -moz-box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
  box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);

  @media (max-width: ${mediaShift}) {
    width: 95%;
    flex-direction: column;
    justify-content: space-evenly;
    height: 280px;
    margin: 45px 0 45px 0;
  }

  .featuredBar {
    position: absolute;
    height: 155px;
    width: 5px;
    overflow: hidden;
    background-color: hsl(180, 29%, 50%);
    z-index: 1;
    border-radius: 10px 0 0 10px;
    opacity: 1;

    @media (max-width: ${mediaShift}) {
      height: 280px;
      flex-direction: column;
    }
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  height: 155px;
  width: 50%;

  @media (max-width: ${mediaShift}) {
    flex-direction: column;
  }
`;

export const TabletsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  height: 155px;
  width: 50%;
  padding: 30px;

  @media (max-width: ${mediaShift}) {
    height: auto;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    margin-top: 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  border-radius: 10px;

  @media (max-width: ${mediaShift}) {
    width: 100%;
  }

  img {
    @media (max-width: ${mediaShift}) {
      margin-top: -48px;
      margin-left: -36px;
    }
  }
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${mediaShift}) {
    padding: 10px 0 0 30px;
  }
`;

export const CompanyNameContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    color: hsl(180, 29%, 50%);
    font-weight: 500;
  }

  .new {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    height: 25px;
    width: 50px;
    background-color: hsl(180, 29%, 50%);
    border-radius: 12px;
    opacity: 1;

    p {
      color: white;
      padding-top: 4px;
      font-size: 10px;
      font-weight: 700;
    }
  }

  .featured {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    height: 25px;
    width: 80px;
    background-color: hsl(180, 14%, 20%);
    border-radius: 12px;
    opacity: 1;

    p {
      color: white;
      padding-top: 4px;
      font-size: 10px;
      font-weight: 700;
    }
  }
`;

export const JobNameContainer = styled.div`
  margin: 10px 0 10px 0;

  p {
    color: hsl(180, 14%, 20%);
    font-weight: 700;

    :hover {
      cursor: pointer;
      color: hsl(180, 29%, 50%);
    }
  }
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mediaShift}) {
    justify-content: flex-start;
    flex-wrap: nowrap;
  }

  p {
    color: hsl(180, 8%, 52%);
    margin-right: 10px;
    font-weight: 500;
  }
`;

export const CustomDivider = styled.div`
  justify-self: center;
  align-self: center;
  width: 90%;
  border-top: 1px solid hsl(180, 8%, 52%);
  margin-top: 20px;
`;

import styled from "styled-components";

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
  background-color: white;
  margin: 15px 0 15px 0;
  border-radius: 10px;
  -webkit-box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
  -moz-box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
  box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
`;

export const CompanyContainer = styled.div`
  display: flex;
  height: 155px;
  width: 50%;
`;

export const TabletsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 155px;
  width: 50%;
  padding: 30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  border-radius: 10px;
  -webkit-box-shadow: inset 4px 0px 0px 0px hsl(180, 29%, 50%);
  -moz-box-shadow: inset 4px 0px 0px 0px hsl(180, 29%, 50%);
  box-shadow: inset 4px 0px 0px 0px hsl(180, 29%, 50%);

  svg {
  }
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

    :hover{
        color: hsl(180, 29%, 50%);
    }
  }
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: hsl(180, 8%, 52%);
    margin-right: 10px;
    font-weight: 500;
  }
`;

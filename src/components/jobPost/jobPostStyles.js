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

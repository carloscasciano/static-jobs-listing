import styled from "styled-components";

export const FilterTabletContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35px;
  margin: 0 0 0 15px;
  opacity: 1;

  .textHolder {
    height: 35px;
    padding: 9px 15px 1px 15px;
    border-radius: 4px 0 0 4px;
    background-color: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    font-weight: 700;
  }

  .iconHolder {
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    padding: 5px 17px 1px 12px;
    border-radius: 0 4px 4px 0;
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 31%, 95%);
    font-weight: 700;
    :hover {
      cursor: pointer;
      background-color: hsl(180, 14%, 20%);
    }
  }

  .jobPostTextHolder {
    height: 35px;
    padding: 9px 15px 1px 15px;
    border-radius: 4px;
    background-color: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    font-weight: 700;

    :hover {
      cursor: pointer;
      background-color: hsl(180, 29%, 50%);
      color: hsl(180, 31%, 95%);
    }
  }
`;

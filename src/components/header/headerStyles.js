import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 156px;
  }
`;

export const FilterContainer = styled.div`
  width: 80%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin-top: -36px;
  margin-bottom: 36px;
  opacity: ${props => props.visibility === 1 ? 1 : 0};
  -webkit-box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
  -moz-box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
  box-shadow: 0px 11px 20px 0px rgba(123, 142, 142, 0.3);
`;

export const FilterTabletsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ClearContainer = styled.div`
  padding: 0 30px 0 0;
  p {
    color: hsl(180, 29%, 50%);
    font-weight: 500;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

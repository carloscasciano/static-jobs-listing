import React from "react";
import FilterTablet from "../tablet/FilterTablet"
import {HeaderContainer, FilterContainer, FilterTabletsContainer, ClearContainer} from "./headerStyles"

export default function Header(props) {
  return (
    <HeaderContainer>
      <img src="/images/bg-header-desktop.svg" alt="header art"></img>
      <FilterContainer>
            <FilterTabletsContainer >
                <FilterTablet />
            </FilterTabletsContainer>
            <ClearContainer>
                <p>Clear</p>
            </ClearContainer>
      </FilterContainer>
      
    </HeaderContainer>
  );
}

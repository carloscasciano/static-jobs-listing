import React from "react";
import FilterTablet from "../tablet/FilterTablet";
import {
  HeaderContainer,
  FilterContainer,
  FilterTabletsContainer,
  ClearContainer,
} from "./headerStyles";

export default function Header({ filteredItems, handleFilteredItems, setFilteredItems }) {
  return (
    <HeaderContainer>
      <img src="/images/bg-header-desktop.svg" alt="header art"></img>
      <FilterContainer visibility={filteredItems.length === 0? 0 : 1}>
        <FilterTabletsContainer>
          {filteredItems.map((item) => (
            <div key={Math.random()}>
              <FilterTablet item={item} handleFilteredItems={handleFilteredItems}/>
            </div>
          ))}
        </FilterTabletsContainer>
        <ClearContainer onClick={()=>setFilteredItems([])}>
          <p>Clear</p>
        </ClearContainer>
      </FilterContainer>
    </HeaderContainer>
  );
}

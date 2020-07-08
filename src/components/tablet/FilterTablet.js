import React from 'react'
import {FilterTabletContainer} from "./tabletsStyles"

export default function FilterTablet(props) {
    return (
        <FilterTabletContainer>
            <div className="textHolder">
               <p>{props.item}</p> 
            </div>
            <div className="iconHolder" onClick={()=>{props.handleFilteredItems(props.item)}}>
                <p>X</p>
            </div>

        </FilterTabletContainer>
    )
}

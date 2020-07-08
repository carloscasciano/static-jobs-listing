import React from 'react'
import {FilterTabletContainer} from "./tabletsStyles"

export default function JobTablet(props) {
    return (
        <FilterTabletContainer onClick={()=>props.handleFilteredItems(props.name)}>
            <div className="textHolder">{props.name}</div>
        </FilterTabletContainer>
    )
}

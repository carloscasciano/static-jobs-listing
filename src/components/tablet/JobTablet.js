import React from 'react'
import {FilterTabletContainer} from "./tabletsStyles"

export default function JobTablet(props) {
    return (
        <FilterTabletContainer onClick={()=>props.handleFilteredItems(props.name)}>
            <div className="jobPostTextHolder">{props.name}</div>
        </FilterTabletContainer>
    )
}

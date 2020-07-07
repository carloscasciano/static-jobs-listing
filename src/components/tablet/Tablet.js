import React from 'react'

export default function Tablet(props) {
    return (
        <div onClick={()=>props.handleFilteredItems(props.section,props.name)} style={{backgroundColor:"yellow", height:"24px"}}>
            <p>{props.name}</p>
        </div>
    )
}

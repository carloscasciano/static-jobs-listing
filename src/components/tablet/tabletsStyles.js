import styled from "styled-components"

export const FilterTabletContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 35px;
    margin: 10px;
    hsl(180, 29%, 50%)
    .textHolder {
        display: flex;
        align-items: center;
        padding: 1px 15px 1px 15px;
        border-radius: 4px 0 0 4px;
        background-color: hsl(180, 31%, 95%);  
        color: hsl(180, 29%, 50%);
    }

    .iconHolder {
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 0 4px 4px 0;
        background-color: hsl(180, 29%, 50%);
        color: hsl(180, 31%, 95%)
    }
`
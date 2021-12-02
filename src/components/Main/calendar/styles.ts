import styled from "styled-components";
import { WIDTH, COLOR } from "../../../styles/index";

export const Wrapper = styled.div`
    width: 1200px;
    height: auto;
    background: ${COLOR.whiteColor};
    box-shadow: 4px 7px 10px #727272;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Top = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;

    & button{
        border: none;
        background: none;
        font-size: 30px;
    }

    & span{
        font-size: 30px;
    }

`

export const Table = styled.table`
    margin-top: 50px;
`

export const TBody = styled.tbody`

    & tr{
        & td:nth-of-type(1){
            & span{
                margin-left: 0;
            }
        }
    }

    & span{
        display: flex;
        justify-content: center;
        font-size: 29px;
        margin-bottom: 50px;
        margin-left: 80px;
    }
`



export const CalTr = styled.tr`
    & td:nth-of-type(1){
        color: #FF4545;
    }
    
    & td:nth-of-type(7){
        color: #1DA0FF;
    }
`

export const Today = styled.td`
   
`

export const NotCurMonth = styled.td`
     
`

export const CurMonth = styled.td`
    
`
import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    margin-top: 50px;
    width: 450px;
    height: 450px;
    background: ${COLOR.whiteColor};
    box-shadow: 4px 7px 7px #c2c2c2;
    border-radius: 13px;
    .main {
        overflow-y: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
    }

    .main::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    /* background: ${COLOR.whiteColor}; */
    justify-content: space-between;
    width: 450px;
    height: 50px;
    border-radius: 13px 13px 0 0;
    backdrop-filter: blur(20px);
    & span{
        font-size: 20px;
        padding-left: 30px;
    }

    & img{
        cursor: pointer;
        width: 20px;
        padding-right: 40px;
    }
`

export const Main = styled.div`
    margin-bottom: 30px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`


export const TodoWrp = styled.div`
    padding-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-of-type(1){
        padding-top: 10px;
    }

    & .check{
        width: 25px; 
        height: 25px;
        border: 1px solid #7F92FC;
        border-radius: 50%;
        margin-left: 35px;
        cursor: pointer;
    }

    & .todoContent{
        font-size: 20px;
        padding-left: 10px;
    }

    & .imgWrp{
        width: 32px;
        margin-right: 33px;
        height: 32px;
        background: #E3E3E3;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        & .more{
            height: 4.5px;
            
        }
    }

    

`
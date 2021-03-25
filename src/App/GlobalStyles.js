import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:'Roboto', sans-serif;
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:130px;
        overflow:hidden;
    }
    .fa-heart:hover {
        cursor: pointer;
    }
`;

export default GlobalStyles;

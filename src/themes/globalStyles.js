import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    
    body,#root{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background-color: #73265e;
        background-image: linear-gradient(122deg,#162059 7%, #f2ad85 45%, #d9704a 78%, #bf4c41 92%);
        overflow-x:hidden;
    }
`
export default GlobalStyle
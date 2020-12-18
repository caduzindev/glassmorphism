import styled from 'styled-components'
import { Grid,Container } from '@material-ui/core'

export const ContainerWrapper = styled(Container)`
    padding:50px;
`
export const GridContianer = styled(Grid)`
    background-color:rgba(255,255,255,0.1);
    border-radius:20px;
    padding-left:4rem;
    padding-right:4rem;
    border:1px solid rgba(255,255,255,0.3);

    @media(max-width:411px){
        padding:0;
    }
`


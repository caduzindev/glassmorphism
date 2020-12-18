import GlobalStyle from './themes/globalStyles'
import styled from 'styled-components'
import Header from './components/Header'
import Card from './components/Card'

import { 
  Button, 
  Grid, 
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { GridContianer,ContainerWrapper } from './styles'
import teste from './images/testeImage.svg'
function App() {
  const screenLG = useMediaQuery('(max-width:1024px)');
  const screen900 = useMediaQuery('(max-width:900px)');

  return (
    <>
    <GlobalStyle/>
    <ContainerWrapper>
      <GridContianer container direction="column" spacing={6}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={screenLG?12:5}>
              <Grid container direction="column" spacing={5} alignItems={screenLG?'center':''}>
                <Grid item>
                  <TypographyWrapper variant="h6">Essa Conceito está em hype</TypographyWrapper>
                  <TypographyWrapper variant={screen900?"h4":"h3"}>Está pagina e apenas um Exemplo</TypographyWrapper>
                  <TypographyWrapper variant="subtitle2">Lorem Ipsum testando Pagina massinha demais</TypographyWrapper>
                </Grid>
                <Grid item>
                  <Button color="default" variant="outlined">
                    <TypographyWrapper>
                      GLASS
                    </TypographyWrapper>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={screenLG?12:7}>
              <Grid container style={{position:'relative'}}>
                <Grid item xs={12}>
                  <ImageTeste src={teste}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" spacing={6}>
            <Grid item xs={12} sm={screen900?12:4}>
              <Card/>
            </Grid>
            <Grid item xs={12} sm={screen900?12:4}>
              <Card/>
            </Grid>
            <Grid item xs={12} sm={screen900?12:4}>
              <Card/>
            </Grid>
          </Grid>
        </Grid>
      </GridContianer>
    </ContainerWrapper>
    </>
  );
}
const TypographyWrapper = styled(Typography)`
    color:white;
    font-family:'Montserrat',sans-serif !important;
    font-weight:400 !important;
    font-size:2rem;
    padding:15px;
    box-sizing:border-box;
`
const ImageTeste = styled.img`
  width:100%;
`
export default App;

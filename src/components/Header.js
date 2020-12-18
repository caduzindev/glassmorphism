import { useState } from 'react'
import { Grid,Typography,useMediaQuery,Drawer,List,ListItem,Divider } from '@material-ui/core'
import { HourglassEmpty,MenuOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Header = ()=>{
    const hiddenMenu =  useMediaQuery('(max-width:900px)');
    const [mobileOpen,setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Grid container style={{marginTop:30}} justify="space-between">
            <Grid item xs={2} direction="row">
                <Grid container direction="row" spacing={1} alignItems="center">
                    <Grid item>
                        <IconGlass/>
                    </Grid>
                    <Grid item>
                        <TypographyWrapper variant="h5">Glass</TypographyWrapper>
                    </Grid>
                </Grid>
            </Grid>
            {!hiddenMenu && (
                <Grid item xs={8}>
                <Grid container direction="row" justify="center" spacing={6} alignItems="center">
                    <Grid item>
                        <TypographyWrapper variant="subtitle1">Home</TypographyWrapper>
                    </Grid>
                    
                    <Grid item>
                        <TypographyWrapper variant="subtitle1">Sobre</TypographyWrapper>
                    </Grid>

                    <Grid item>
                        <TypographyWrapper variant="subtitle1">Projetos</TypographyWrapper>
                    </Grid>

                    <Grid item>
                        <TypographyWrapper variant="subtitle1">Ideias</TypographyWrapper>
                    </Grid>

                    <Grid item>
                        <TypographyWrapper variant="subtitle1">Sonhos</TypographyWrapper>
                    </Grid>

                    <Grid item>
                        <TypographyWrapper variant="subtitle1">Exemplos</TypographyWrapper>
                    </Grid>
                </Grid>
            </Grid>
            )}
            {hiddenMenu && (
                <Grid item xs={8}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <MenuOutlined style={{
                            fontSize:60,
                            color:'rgba(255,255,255,0.3)',
                            border:'1px solid rgba(255,255,255,0.1)',
                            cursor:'pointer'
                        }} onClick={()=>setMobileOpen(true)}/>
                    </Grid>
                </Grid>
            )}
             <DrawerWrapper
                anchor={"right"}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <ListWrapper>
                    <ListItemWrapper >
                        <TypographyList variant="subtitle1">Home</TypographyList>
                    </ListItemWrapper>
                    <Divider variant="middle"/>
                    <ListItemWrapper>
                        <TypographyList variant="subtitle1">Sobre</TypographyList>
                    </ListItemWrapper>
                    <Divider variant="middle"/>
                    <ListItemWrapper>
                        <TypographyList variant="subtitle1">Projetos</TypographyList>
                    </ListItemWrapper>
                    <Divider variant="middle"/>
                    <ListItemWrapper>
                        <TypographyList variant="subtitle1">Ideias</TypographyList>
                    </ListItemWrapper>
                    <Divider variant="middle"/>
                    <ListItemWrapper>
                        <TypographyList variant="subtitle1">Sonhos</TypographyList>
                    </ListItemWrapper>
                    <Divider variant="middle"/>
                    <ListItemWrapper>
                        <TypographyList variant="subtitle1">Exemplos</TypographyList>
                    </ListItemWrapper>
                </ListWrapper>
            </DrawerWrapper>
            <Grid item xs={2}>
                <Grid container justify="flex-end">
                    <Grid item>
                        <IconGlass/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const TypographyWrapper = styled(Typography)`
    color:white;
    font-family:'Montserrat', sans-serif !important;
    font-weight:bold !important;
`
const IconGlass = styled(HourglassEmpty)`
    color:white;
    font-size:50px !important;
`
const DrawerWrapper =  styled(Drawer)`
    background-color:linear-gradient(122deg,#162059 7%, #f2ad85 45%, #d9704a 78%, #bf4c41 92%);
`

const ListWrapper = styled(List)`
    width:250px;
    height:100vh;
    background-color:#f2ad85;
    opacity:0.8;

`
const ListItemWrapper =  styled(ListItem)`
    cursor:pointer;
    &:hover{
        background:white;
        transition: 0.5s ease-in-out;
        >*{
            &:first-child{
                color:black;
            }
        }
    }
`

const TypographyList = styled(Typography)`
    font-family:'Montserrat', sans-serif !important;
    font-weight:bold !important;
    color:white;
    padding:15px;
`
export default Header
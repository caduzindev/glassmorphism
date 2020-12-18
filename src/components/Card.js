import {  
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Card as CardUI, 
    Typography
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tilt from 'react-tilt'
import styled from 'styled-components'

const Card = () =>{
    return (
        <Tilt options={{max:15}}>
            <CardUI style={{
                backgroundColor:"rgba(255,255,255,0.1)"
            }}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <TypographyWrapper color="textSecondary">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </TypographyWrapper>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </CardUI>
        </Tilt>
    )
}

const TypographyWrapper = styled(Typography)`
    font-family:'Montserrat',sans-serif !important;
    font-weight:bold !important;
    font-size:0.9rem !important;
`

export default Card;
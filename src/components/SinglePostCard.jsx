import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { useNavigate } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteConfirmation from '../components/DeleteConfirmation'
const options = ['Edit', 'Delete'];
const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: 'left'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SinglePostCard({ image, description, userName, userImage, postId, userID }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);

  const open = Boolean(anchorEl);

  //  var loggedUserId = document.cookie
  //   .split(';')
  //   .map(cookie => cookie.split('='))
  //   .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;

  var loggedUserId = 1;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  const navigate = useNavigate();

  function navigation(url) {
    navigate(url);

  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleClose = (editKey) => {
    
    if (loggedUserId !== userID) {
      if (editKey !== 'close') {
        console.log("you can not make changes to this post !");
      }

    } else {

      if (editKey === 'Edit') {
        navigation(`/editpost/?postID=${postId}`);
      } else if (editKey === 'Delete') {
        console.log(deleteConfirm);
        setConfirm(true);
       
      }

    }
    setAnchorEl(null);

  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={userImage} aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <div>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={() => { handleClose('close') }}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "10ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  onClick={() => { handleClose(option) }}

                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
        title={userName}
        subheader="September 14, 2016"
      />
      {confirm === true && <DeleteConfirmation isOpen={false} setDeleteConfirm={setDeleteConfirm}/>}
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpAltOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => { navigation(`/postcomments?postID=${postId}`) }}>
          <ChatBubbleIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

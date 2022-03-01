import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import PolicyIcon from "@material-ui/icons/Policy";
import WarningIcon from "@material-ui/icons/Warning";
import PublicIcon from "@material-ui/icons/Public";
import LanguageIcon from "@material-ui/icons/Language";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useNavigate } from "react-router-dom";
const options = ["English", "Sinhala"];

const ITEM_HEIGHT = 48;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    background: "green",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function ProminentAppBar() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const headingStyle = { textAlign: "center" };
  const iconStyle = { alignItem: "center", minWidth: "56px", paddingTop: '5px' };
  const icons = [
    {
      id: 1,
      name: "My profile",
      url: "/profile",
      icon: AccountCircleIcon,
    },
    {
      id: 2,
      name: "Welcome tour",
      url: "/welcometour",
      icon: AirplanemodeActiveIcon,
    },
    {
      id: 3,
      name: "Privacy policy",
      url: "/privacypolicy",
      icon: PolicyIcon,
    },
    {
      id: 4,
      name: "Disclaimer",
      url: "/disclaimer",
      icon: WarningIcon,
    },
    {
      id: 5,
      name: "Website",
      url: "/login",
      icon: PublicIcon,
    },
    {
      id: 6,
      name: "Change language",
      url: "/language",
      icon: LanguageIcon,
    },
    {
      id: 7,
      name: "Sign out",
      url: "/login",
      icon: PowerSettingsNewIcon,
    },
  ];

  const [state, setState] = React.useState({
    left: false,
  });

  const settingsUrls = (url) => {
    navigate(url);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <h3 style={headingStyle}>Settings</h3>
      </div>
      <List>
        {icons.map((list) => (
          <ListItem
            button
            key={list.name}
            onClick={() => {
              settingsUrls(list.url);
            }}
          >
            <ListItemIcon>
              <Typography style={{ color: "green" }}><list.icon key={list.id} style={iconStyle} /></Typography>

            </ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Button
            onClick={toggleDrawer("left", true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" > */}
            <MenuIcon />
            {/* </IconButton> */}
          </Button>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>

          <Typography variant="h6" className={classes.title}></Typography>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

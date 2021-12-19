/*import React from "react";
import {
  AppBar,
  Avatar,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import useStyles from "./style";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ selectedSidebar }) => {
  const classes = useStyles();

  const icons = [
    RefreshOutlinedIcon,
    DnsOutlinedIcon,
    SettingsOutlinedIcon,
    AppsOutlinedIcon,
  ];
 return (
    <AppBar position="relative" className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.leftSection}>
          <MenuOutlinedIcon  size="small"className={classes.icon} />
        
            
          <Typography color="textSecondary" className={classes.title}>
            {selectedSidebar || "Keep"}
         </Typography>
        </div>
        <Paper className={classes.middleSection}>
        <SearchIcon size="small" className={classes.icon}/>
  
          
          <InputBase className={classes.input} placeholder="Search Note ..." />
        </Paper>
        <div className={classes.rightSection}>
          {icons.map((Icon) => (
            
              <Icon className={classes.icon} />
            
          ))}
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/27.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;*/



/*return(
  <AppBar className={classes.container} position="absolute">
    <toolbar className={classes.leftsection}>
      <IconButton>
        <MenuOutlinedIcon 
      </IconButton>
    </toolbar>
  </AppBar>
)*/
import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  InputBase,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import useStyles from "./style";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ selectedSidebar, filterNotes, currentUser }) => {
  const classes = useStyles();

  const icons = [
    RefreshOutlinedIcon,
    DnsOutlinedIcon,
    SettingsOutlinedIcon,
    AppsOutlinedIcon,
  ];

  const [search, setSearch] = useState("");

  const onClick = () => {
    filterNotes(search);
  };

  return (
    <AppBar position="relative" className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.leftSection}>
          <IconButton>
            <MenuOutlinedIcon className={classes.icon} />
          </IconButton>
          <Typography color="textSecondary" className={classes.title}>
            {selectedSidebar || "Keep"}
          </Typography>
        </div>
        <Paper className={classes.middleSection}>
          <IconButton onClick={onClick} size="small" className={classes.icon}>
            <SearchIcon fontSize="small" />
          </IconButton>
          <InputBase
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={classes.input}
            placeholder="Search Note ..."
          />
        </Paper>
        <div className={classes.rightSection}>
          {icons.map((Icon) => (
            <IconButton>
              <Icon className={classes.icon} />
            </IconButton>
          ))}
          <Tooltip title={currentUser.displayName}>
            <Avatar alt={currentUser.displayName} src={currentUser.photoURL} />
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

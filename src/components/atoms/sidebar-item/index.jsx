import React from "react";
//import AddAlertIcon from '@material-ui/icons/AddAlert';
//import EditIcon from '@material-ui/icons/Edit';
//import ArchiveIcon from '@material-ui/icons/Archive';
//import DeleteIcon from '@material-ui/icons/Delete';
//import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { Typography } from "@material-ui/core"; 
import { useStyles } from "./style";
const SideBarItem = ({ isActive, text, icon: Icon, onClick }) => {
  const classes = useStyles({ isActive });
  return (
    <div className={classes.sideBarItem} onClick={onClick}>
      <Icon fontSize="medium" className={classes.icon} />
      <Typography className={classes.text}>{text}</Typography>
    </div>
  );
};

export default SideBarItem;


/*import React from "react";
import SideBarItem from "../../atoms/sidebar-item";
import useStyles from "./style";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      {/* TODO: icon and text dynamic }*/
   
     // <SideBarItem text="Notes"  isActive="true" />
     // <SideBarItem text="Remainder" isactive="false" />
     // <SideBarItem text="Edit" isactive="false"/>
     // <SideBarItem text="archive" isactive="false"/>
     // <SideBarItem text="Bin" isactive="false"/> 
      
   // </div>
 // );
//};

//export default Sidebar;/*


import React, { useState } from "react";
import SideBarItem from "../../atoms/sidebar-item";
import useStyles from "./style";

import {
  EmojiObjectsOutlined,
  BookmarkBorderOutlined,
  SaveAltOutlined,
  DeleteOutlineOutlined,
  //AddAlarmOutlined,
} from "@material-ui/icons";

const initialState = [
  { id: "1", isActive: true, Icon: EmojiObjectsOutlined, text: "Notes" },
  {
    id: "2",isActive: false,Icon: BookmarkBorderOutlined,text: "Bookmarks",
  },
  { id: "3", isActive: false, Icon: SaveAltOutlined, text: "Label" },
  { id: "4", isActive: false, Icon: DeleteOutlineOutlined, text: "Bin" },
];

const Sidebar = ({ setSelectedSidebar }) => {
  const classes = useStyles();
  const [sidebarItems, setsidebarItems] = useState(initialState);

  const selectSidebarItem = (item) => {
    const newState = sidebarItems.map((obj) =>
      obj.id === item.id
        ? { ...obj, isActive: true }
        : { ...obj, isActive: false }
    );
    setsidebarItems(newState);
    setSelectedSidebar(item.text);
  };

  return (
    <div className={classes.container}>
      {sidebarItems.map((item) => (
        <SideBarItem
          key={item.id}
          onClick={() => selectSidebarItem(item)}
          text={item.text}
          icon={item.Icon}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default Sidebar;



/*const initstate = [
  {id:1,icon:AddAlarmOutlined,isActive: false}

]*/



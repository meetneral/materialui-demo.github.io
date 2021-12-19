import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(6),
    borderBottomRightRadius: theme.spacing(6),
    // NOTE: hover color also changing for active item
    backgroundColor: (prop) => (prop.isActive ? "#feefc3" : "#fff"),
    "&:hover": {
      backgroundColor: "#f1f3f4",
    },
    cursor: "pointer",
  },
  icon: {
    marginRight: theme.spacing(4),
  },
}));
export default useStyles;

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "cyan",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  paper: {
    maxWidth: "500px",
    flex: 1,
    padding: "10px 10px",
    display: "flex",
    flexDirection: "column",
  },
  bottonAction: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "100%",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 10px",
  },
  icon: {
    marginRight: "12px",
  },
}));
export default useStyles;


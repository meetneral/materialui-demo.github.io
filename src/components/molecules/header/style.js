import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
  },
  toolbar: {
    display: "grid",
    gridTemplateColumns: "200px auto max-content",
  },
  icon: {
    color: "#5f6368",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  middleSection: {
    display: "flex",
    alignItems: "center",
    maxWidth: "80%",
    padding: "4px 8px",
  },
  input: {
    flex: 1,
  },
}));
export default useStyles;


import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../style";

const CustomCard = ({
  id,
  title,
  content,
  createdAt,
  setNotes,
  deleteNote,
}) => {
  const classes = useStyles();

  const handleDelete = () => {
    deleteNote(id);
     setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {createdAt}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;

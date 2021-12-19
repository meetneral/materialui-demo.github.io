/*import { Container, Grid } from "@material-ui/core";
import React from "react";
import CustomCard from "../../atoms/custom-card";
import useStyles from "./style";
import { notes } from "../../../data";
import CreateNote from "../create-note"
//import { Paper } from "@material-ui/core";
//import { InputBase } from "@material-ui/core";
//import CheckBoxIcon from '@mui/icons-material/CheckBox';
//import { IconButton } from "@material-ui/core";
const MainContent = () => {
  const classes = useStyles();
  return ( 

    
    <Container className={classes.container}>
      <CreateNote/>
      <br/>
      <divider/>
      <br/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard
              id={0}
              title={"Default Title"}
              body={"This is a body of defult card"}
              createdAt={"10/13/2022"} />
          </Grid>
          {notes.map((note) => (
            <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
              <CustomCard
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt} />
            </Grid>
          ))}
        </Grid>
      </Container>
  );
};

export default MainContent;*/
import { Container, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomCard from "../../atoms/custom-card";
import useStyles from "./style";
import CreateNote from "../create-note";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../../firebase";

const MainContent = () => {
  const classes = useStyles();

  const [notes, setNotes] = useState([]);

  const db = getFirestore(app);
  const getNotes = async () => {
    const notesRef = collection(db, "notes");
    const notes = await getDocs(notesRef);
    const noteList = notes.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setNotes(noteList);
  };

  useEffect(() => {
    getNotes();
  }, );

  return (
    <Container className={classes.container}>
      <CreateNote setNotes={setNotes} />
      <br />
      <Divider />
      <br />

      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomCard
            id={0}
            title={"Default Title"}
            body={"This is a body of defult card"}
            createdAt={"10/13/2022"}
          />
        </Grid> */}
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
            <CustomCard
              setNotes={setNotes}
              id={note.id}
              title={note.title}
              content={note.content}
              createdAt={note.createdAt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainContent;


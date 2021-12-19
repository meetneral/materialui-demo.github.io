
import React, { useEffect, useState } from "react";
import Header from "./components/molecules/header";
import "./App.css";
import useStyles from "./style";
import Sidebar from "./components/molecules/sidebar";
import MainContent from "./components/molecules/main-content";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { app } from "./firebase";
import Auth from "./components/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const App = () => {
  const classes = useStyles();
  const [selectedSidebar, setSelectedSidebar] = useState("Keep");

  const [notes, setNotes] = useState([]);
  const [filteredNotes, setfilteredNotes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState("dummy");

  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const getNotes = async () => {
    const notesRef = collection(db, userId);
    const notes = await getDocs(notesRef);
    const noteList = notes.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setNotes(noteList);
    setfilteredNotes(noteList);
  };

  useEffect(() => {
    getNotes();
  },);

  const filterNotes = (search) => {
    let tempNote = notes;
    if (search) {
      const filteredNotes = tempNote.filter((note) => note.title.match(search));

      setfilteredNotes(filteredNotes);
    } else {
      setfilteredNotes(tempNote);
    }
  };

  const createNote = async (note) => {
    console.log("created", note);
    const noteRef = collection(db, userId);
    const dcRef = await addDoc(noteRef, note);
    await getNotes();
    console.log("dcRef", dcRef);
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, userId, id));
    await getNotes();
  };

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setCurrentUser(res.user);
        setUserId(res.user.uid);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      {currentUser ? (
        <>
          <Header
            currentUser={currentUser}
            filterNotes={filterNotes}
            selectedSidebar={selectedSidebar}
          />
          <div className={classes.container}>
            <Sidebar setSelectedSidebar={setSelectedSidebar} />
            <MainContent
              {...{ setNotes, createNote, deleteNote }}
              notes={filteredNotes}
            />
          </div>
        </>
      ) : (
        <Auth handleSignIn={handleSignIn} />
      )}
    </>
  );
};

export default App;

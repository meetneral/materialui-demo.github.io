import {
  Button,
  Collapse,
  IconButton,
  InputBase,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";
import {
  AddAlertOutlined,
  PersonAddOutlined,
  ImageOutlined,
  ArchiveOutlined,
  ColorLensOutlined,
  MoreVertOutlined,
} from "@material-ui/icons";

const CreateNote = ({ setNotes }) => {
  const classes = useStyles();

  const [inputData, setInputData] = useState({
    title: "",
    content: "",
  });

  const actionIcons = [
    { name: "addAlert", Icon: AddAlertOutlined, onClick: null },
    { name: "Person", Icon: PersonAddOutlined, onClick: null },
    { name: "imagePicker", Icon: ImageOutlined, onClick: null },
    { name: "archive", Icon: ArchiveOutlined, onClick: null },
    {
      name: "colorPicker",
      Icon: ColorLensOutlined,
      onClick: () => {},
    },
    { name: "more", Icon: MoreVertOutlined, onClick: null },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    console.log(inputData);
    let createdAt = new Date();
    createdAt = createdAt.toLocaleDateString();
    let note = {
      title: inputData.title,
      content: inputData.content,
      createdAt: createdAt,
    };
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...note, id: prevNotes.length + 1 },
    ]);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <InputBase
          className={classes.input}
          placeholder="Title goes here"
          onFocus={() => setIsExpanded(true)}
          onChange={handleChange}
          name="title"
        />

        <Collapse in={isExpanded}>
          <InputBase
            name="content"
            onChange={handleChange}
            multiline
            maxRows={5}
            minRows={3}
            className={classes.input}
            placeholder="Take a Note..."
          />

          <div className={classes.bottonAction}>
            <div className={classes.icons}>
              {actionIcons.map(({ Icon, onClick }, index) => (
                <IconButton
                  key={index}
                  size="small"
                  aria-label="menu"
                  onClick={onClick}
                  className={classes.icon}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </div>
            <Button onClick={onSubmit}>Save</Button>
          </div>
        </Collapse>
      </Paper>
    </div>
  );
};

export default CreateNote;

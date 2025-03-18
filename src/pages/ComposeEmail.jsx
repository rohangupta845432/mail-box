import React, { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";
import JoditEditor from "jodit-react";
import { MAIL_BOX_URL } from "../urls";
import { useSelector } from "react-redux";

function ComposeEmail(props) {
  // const senderEmail = "e4seschoolindiapvtltd@gmail.com";
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [receiverEmailInput, setReceiverEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const myEmail = useSelector((state) => state.auth.email);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(receiverEmailInput, subjectInput, contentInput);
    if (!receiverEmailInput && !subjectInput && !contentInput) {
      alert("Please Fill all data");
      return;
    }
    console.log(receiverEmailInput, subjectInput, contentInput);

    fetch(MAIL_BOX_URL, {
      method: "POST",
      body: JSON.stringify({
        id: Date.now(),
        senderEmail: myEmail,
        receiverEmail: receiverEmailInput,
        subject: subjectInput,
        content: contentInput,
        isRead: 0,
        isSenderDelete: 0,
        isReceverDelete: 0,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response is not Ok");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card>
      <div style={{ padding: "20px", margin: "20px" }}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Receiver email"
              value={receiverEmailInput}
              onChange={(e) => {
                setReceiverEmailInput(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Subject"
              value={subjectInput}
              onChange={(e) => {
                setSubjectInput(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Compose email</Form.Label>
            <JoditEditor
              ref={editor}
              value={contentInput}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {
                setContentInput(newContent);
              }}
            />
          </Form.Group>
          <button className="btn btn-success">Send Email</button>
        </Form>
      </div>
    </Card>
  );
}

ComposeEmail.propTypes = {};

export default ComposeEmail;

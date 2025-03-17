import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { MAIL_BOX_URL } from "../urls";
import { FaArrowLeft } from "react-icons/fa";

function ViewEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data, navigate]);

  if (!data) {
    return null; // This prevents rendering before navigation happens
  }
  if (!data.isRead) {
    fetch(`${MAIL_BOX_URL}emails/${data.dbId}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isRead: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Updated successfully:", data))
      .catch((error) => console.error("Error updating:", error));
  }
  return (
    <>
      <div className="mb-5">
        <Link className="btn btn-success" to="/">
          <FaArrowLeft /> Back
        </Link>
      </div>
      <Card>
        <Card.Header>
          <h2>{data.subject}</h2>
        </Card.Header>
        <Card.Body>
          <div className="d-flex">
            <div>{data.senderEmail}</div>
            <div>{data.id}</div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </Card.Body>
      </Card>
    </>
  );
}

export default ViewEmail;

import React from "react";
import EmailItem from "../components/EmailItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SendEmail() {
  const navigate = useNavigate();
  const onClickHandler = (email) => {
    // console.log(email);
    navigate("/view-email", { state: email });
  };
  const myEmail = useSelector((store) => store.auth.email);
  const emailsData = useSelector((store) => store.email.emailsData);

  const displayableData = emailsData.filter(
    (emailData) => emailData.senderEmail === myEmail
  );
  if (displayableData.length === 0) {
    return <p>No data found</p>;
  }
  return (
    <>
      {displayableData.map((email) => {
        return (
          <EmailItem
            email={email}
            onClickHandlerToShow={onClickHandler}
            key={email.id}
            onClickHandlerToDelete={null}
          />
        );
      })}
    </>
  );
}

export default SendEmail;

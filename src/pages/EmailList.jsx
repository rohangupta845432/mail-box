import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../store/slices/email-slice";
import { MAIL_BOX_URL } from "../urls";
import { useNavigate } from "react-router-dom";
function EmailList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myEmail = "admin@admin.com";

  const onClickHandler = (email) => {
    console.log(email);
    navigate("/view-email", { state: email });
  };
  useEffect(() => {
    fetch(`${MAIL_BOX_URL}emails.json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Response Error");
        }
      })
      .then((data) => {
        console.log(data.lenght);
        if (data) {
          const datalist = [];
          const keys = Object.keys(data);
          keys.forEach((key) => {
            datalist.push({ ...data[key], dbId: key });
          });
          console.log(datalist);
          dispatch(emailActions.setEmail(datalist));
        } else {
          dispatch(emailActions.setEmail([]));
        }
      })
      .catch((error) => console.log("somthing Went wrong"));

    // dispatch(emailActions.setEmail(emaildata));
  }, [dispatch]);
  const emailsData = useSelector((state) => state.email.emailsData);
  if (emailsData.lenght === 0) {
    return <p>Loding .....</p>;
  }
  const displayableData = emailsData.filter(
    (emailData) => emailData.receiverEmail === myEmail
  );

  return (
    <>
      {displayableData.map((email) => {
        return (
          <div
            onClick={(e) => {
              onClickHandler(email);
            }}
            className="text-muted border-bottom"
            key={email.id}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap !important",
              alignContent: "center",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            {!email.isRead ? (
              <div
                className="circle"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#198754",
                  borderRadius: "8px",
                  lineHeight: "40px",
                  marginRight: "20px",
                }}
              ></div>
            ) : (
              <i></i>
            )}
            <div>
              <p
                className="pb-1 mb-0 small lh-sm"
                style={{ width: "100%" }}
                key={email.id}
              >
                <strong className="d-block text-gray-dark">
                  @{email.senderEmail}
                </strong>
                {email.subject}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EmailList;

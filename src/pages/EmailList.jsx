import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../store/slices/email-slice";
import { MAIL_BOX_URL } from "../urls";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import ErrorMsg from "../components/UI/ErrorMsg";
import Loding from "../components/UI/Loding";
import EmailItem from "../components/EmailItem";

function EmailList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoding, error, fetchData } = useHttp();

  // dispatch(emailActions.setEmail([]));
  const onClickHandler = (email) => {
    // console.log(email);
    navigate("/view-email", { state: email });
  };

  const onDeleteHandler = (dbId) => {
    console.log("delete clicked");
    fetchData(
      `${MAIL_BOX_URL}emails/${dbId}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          isReceverDelete: 1,
        },
      },
      handleData
    );

    function handleData(data) {
      console.log("Updated successfully:", data);
      dispatch(emailActions.deleteEmailToReceiver({ dbId: dbId }));
    }
  };

  const manageData = useCallback((data) => {
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
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setinterval");
      fetchData(`${MAIL_BOX_URL}emails.json`, {}, manageData);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [fetchData, manageData]);

  const myEmail = useSelector((state) => state.auth.email);
  const emailsData = useSelector((state) => state.email.emailsData);
  if (emailsData.lenght === 0) {
    return <p>Loding .....</p>;
  }
  const displayableData = emailsData.filter(
    (emailData) =>
      emailData.receiverEmail === myEmail && emailData.isReceverDelete === 0
  );
  if (error) {
    return <ErrorMsg message={error} />;
  }

  if (isLoding) {
    return <Loding />;
  }

  return (
    <>
      {displayableData.map((email) => {
        return (
          <EmailItem
            email={email}
            onClickHandlerToShow={onClickHandler}
            key={email.id}
            onClickHandlerToDelete={onDeleteHandler}
          />
        );
      })}
    </>
  );
}

export default EmailList;

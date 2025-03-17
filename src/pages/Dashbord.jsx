import React from "react";
import { Container, Card } from "react-bootstrap";
import ComposeEmail from "./ComposeEmail";
import EmailList from "./EmailList";
import { RiInboxLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <Container fluid className="p-3">
      <h4 className="border-bottom pb-2 mb-0">
        <RiInboxLine /> Inbox{" "}
      </h4>
      <div className="d-flex gap-3 flex-wrap">
        <EmailList />
      </div>
    </Container>
  );
};

export default Dashboard;

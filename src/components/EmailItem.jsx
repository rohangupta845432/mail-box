import React from "react";
import "./EmailItem.css";
import { MdDelete } from "react-icons/md";
function EmailItem({ email, onClickHandlerToShow, onClickHandlerToDelete }) {
  return (
    <div
      onClick={(e) => {
        onClickHandlerToShow(email);
      }}
      className="text-muted border-bottom email-item-row"
    >
      <div>
        {!email.isRead ? <div className="circle"></div> : <i></i>}
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

      {onClickHandlerToDelete && (
        <button
          className="btn btn-sm btn-danger"
          onClick={(e) => {
            e.stopPropagation();
            onClickHandlerToDelete(email.dbId);
          }}
        >
          <MdDelete />
        </button>
      )}
    </div>
  );
}

export default EmailItem;

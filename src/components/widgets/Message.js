import React from "react";

const Message = (props) => {
  const { status } = props;

  const messages = {
    loading: 'Loading...',
    error: (
      <React.Fragment>
        Menu failed to load.
        <br />
        Please try again...
      </React.Fragment>
    ),
  };

  const messageText = messages[status];

  if (!messageText) {
    return null;
  }

  return (
    <div
      className={`message-${status}`}
      role={status === 'error' ? 'alert' : 'status'}
      aria-live="polite"
      aria-busy={status === 'loading'}
    >
      {messageText}
    </div>
  );
}

export default Message;
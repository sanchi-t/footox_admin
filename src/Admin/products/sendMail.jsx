import axios from "axios";
import React, { useState } from "react";
// import "./App.css"

function SendMail() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const handleSend = async (e) => {
    setSent(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}sendmail`, {
        text,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {!sent ? (
        <form onSubmit={handleSend}>
          <input
            type="text"
            style={{ border: "2px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit">Send Email</button>
        </form>
      ) : (
        <h1>Email Sent</h1>
      )}
    </div>
  );
}

export default SendMail;

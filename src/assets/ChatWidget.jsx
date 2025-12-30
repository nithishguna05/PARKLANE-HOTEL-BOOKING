import { useState } from "react";
import { FiMessageSquare, FiChevronDown } from "react-icons/fi";
import "./ChatWidget.css";

function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <div
        className="chat-float"
        onClick={() => setOpen(!open)}
        aria-label="Chat"
      >
        {!open ? <FiMessageSquare /> : <FiChevronDown />}
      </div>

      {/* CHAT BOX */}
      {open && (
        <div className="chat-box">

          {/* HEADER */}
          <div className="chat-header">
            <span>
              This conversation will be recorded for quality and training purposes.
            </span>
          </div>

          {/* BODY */}
          <div className="chat-body">
            <div className="chat-msg bot">
              <div className="avatar">A</div>
              <div className="bubble">
                Hej. Jeg er Arthur, din kunstige intelligensassistent.
                Hvordan kan jeg hjælpe dig i dag?
              </div>
            </div>
          </div>

          {/* INPUT */}
          <div className="chat-input">
            <input type="text" placeholder="Skriv et svar..." />
            <button className="send-btn">
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;

// messageDialog.jsx
import React from 'react';

export function MessageDialog({ message, onClose }) {
  return (
    <div className="message-dialog">
      <div className="message-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
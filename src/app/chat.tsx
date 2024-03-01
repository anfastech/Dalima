"use client";
import React from 'react';

const Chat = () => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="py-4 px-6 flex items-center justify-between">
        <div className="text-lg font-bold text-blue-500">Dalima</div>
        {/* Add any additional header elements or actions here */}
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Individual message */}
        <div className="flex mb-4 items-center">
          <img
            className="w-8 h-8 rounded-full mr-4"
            src="https://via.placeholder.com/50"
            alt="User Avatar"
          />
          <div className="flex-1 bg-gray-800 rounded-lg p-2">
            <div className="font-semibold">@username</div>
            <div>Message content goes here</div>
            {/* Add timestamp or other message information here */}
          </div>
        </div>
        {/* Repeat this structure for other messages */}
      </div>

      {/* Message input */}
      <div className="bg-gray-800 border-t border-gray-700 py-4 px-6 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full text-black border border-gray-700 rounded-lg px-4 py-2 mr-4"
        />
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
          onClick={() => {
            alert("good");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

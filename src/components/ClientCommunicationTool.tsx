import React, { useState } from "react";
import { FiBell, FiMessageSquare, FiUpload, FiSettings, FiUser } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";

const ClientCommunicationTool = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New case update available", time: "2 hours ago" },
    { id: 2, message: "Document uploaded by attorney", time: "5 hours ago" },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Attorney Smith",
      message: "Hello, I've reviewed your case documents.",
      time: "10:30 AM",
      isUser: false,
    },
    {
      id: 2,
      sender: "You",
      message: "Thank you for the update. When is our next meeting?",
      time: "10:35 AM",
      isUser: true,
    },
  ]);

  const [caseUpdates, setCaseUpdates] = useState([
    {
      id: 1,
      title: "Initial Case Review",
      progress: 100,
      updates: ["Documentation received", "Initial assessment completed"],
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Court Filing Preparation",
      progress: 60,
      updates: ["Draft documents prepared", "Pending final review"],
      date: "2024-01-20",
    },
  ]);

  const Dashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Legal Risk Score</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-blue-600 rounded-full h-4 w-3/4"></div>
        </div>
        <p className="mt-2 text-gray-600">Current Risk: Moderate</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
        <ul className="space-y-2">
          {caseUpdates.slice(0, 3).map((update) => (
            <li key={update.id} className="text-gray-600">
              {update.title} - {update.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const CaseUpdates = () => (
    <div className="p-6 space-y-6">
      {caseUpdates.map((update) => (
        <div key={update.id} className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">{update.title}</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-blue-600 rounded-full h-4"
              style={{ width: `${update.progress}%` }}
            ></div>
          </div>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {update.updates.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            Read More
          </button>
        </div>
      ))}
    </div>
  );

  const Chat = () => (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-4 ${
                message.isUser
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">{message.sender}</span>
              </div>
              <p>{message.message}</p>
              <span className="text-sm opacity-75 block mt-2">{message.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 bg-white border-t">
        <div className="mb-4 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <FiUpload className="mx-auto text-2xl mb-2" />
          <p className="text-gray-600">Drag and drop files here</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );

  const Notifications = () => (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <BsCircleFill className="text-blue-600 text-xs mt-2" />
              <div>
                <p className="text-gray-800">{notification.message}</p>
                <span className="text-sm text-gray-500">
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Client Communication Tool
            </h1>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <FiBell className="text-xl" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <FiSettings className="text-xl" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <FiUser className="text-xl" />
              </button>
            </div>
          </div>
          <nav className="flex space-x-4">
            {[
              { id: "dashboard", label: "Dashboard" },
              { id: "updates", label: "Case Updates" },
              { id: "chat", label: "Chat" },
              { id: "notifications", label: "Notifications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 font-medium text-sm rounded-md ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "updates" && <CaseUpdates />}
        {activeTab === "chat" && <Chat />}
        {activeTab === "notifications" && <Notifications />}
      </main>
    </div>
  );
};

export default ClientCommunicationTool;

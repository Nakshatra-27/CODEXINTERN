import React, { useState, useCallback, useEffect } from "react";

export default function App() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [triggerGenerate, setTriggerGenerate] = useState(false);

  // Function to generate random string
  const generatePassword = useCallback(() => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&+=?/";
    let newPass = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      newPass += chars[index];
    }
    setPassword(newPass);
    setCopied(false);
  }, [length]);

  // useEffect → only runs when triggerGenerate changes
  useEffect(() => {
    if (triggerGenerate) {
      generatePassword();
      setTriggerGenerate(false);
    }
  }, [triggerGenerate, generatePassword]);

  const handleGenerateClick = () => {
    setTriggerGenerate(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center w-full max-w-md border border-gray-200">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          🔐 Random String Generator
        </h2>

        {/* Input + Button */}
        <div className="flex gap-3 mb-6 w-full">
          <input
            type="number"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-24 text-center focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            onClick={handleGenerateClick}
            className="flex-1 px-5 py-2 bg-pink-500 text-white font-medium rounded-lg shadow hover:bg-pink-600 transition"
          >
            Generate
          </button>
        </div>

        {/* Password Display */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-4 rounded-lg w-full justify-between">
          <span className="font-mono text-lg text-gray-800 break-all">
            {password || "Click Generate to create a password"}
          </span>
          <button
            onClick={copyToClipboard}
            disabled={!password}
            className={`px-3 py-1 rounded-lg text-white transition ${
              copied
                ? "bg-green-500 hover:bg-green-600"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            {copied ? "✅ Copied" : "Copy"}
          </button>
        </div>

        {/* Footer Info */}
        <p className="text-sm text-gray-500 mt-5">
          Length: <span className="font-semibold">{length}</span> characters
        </p>
      </div>
    </div>
  );
}

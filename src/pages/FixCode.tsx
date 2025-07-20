// src/pages/FixCode.tsx

import React, { useState } from "react";
import axios from "axios";

const FixPage: React.FC = () => {
  const [code, setCode] = useState("");
  const [fixedCode, setFixedCode] = useState("");
  const [error, setError] = useState("");

  const handleFixCode = async () => {
    setError("");
    setFixedCode("");

    try {
      const response = await axios.post(
        "https://codefixer-q5yh.vercel.app/api/fix", // ✅ Your deployed backend URL
        { code }
      );

      setFixedCode(response.data.fixedCode || response.data);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || "Something went wrong while fixing the code.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Fix Your Code</h2>

      <label htmlFor="language">Select code type:</label>
      <select id="language" className="form-select mb-3" disabled>
        <option>JavaScript</option>
      </select>

      <textarea
        rows={10}
        className="form-control mb-3"
        placeholder="Enter your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button className="btn btn-dark mb-3" onClick={handleFixCode}>
        Fix Code
      </button>

      {error && (
        <div className="alert alert-danger">
          ❌ {error}
        </div>
      )}

      {fixedCode && (
        <textarea
          className="form-control"
          rows={10}
          readOnly
          value={fixedCode}
        />
      )}
    </div>
  );
};

export default FixPage;

import { useState } from "react";

const FixCode = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleFix = async () => {
    setResult("");
    setError("");

    try {
      const response = await fetch("/api/fix-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.fixedCode);
      } else {
        setError(data.error || "Failed to format code");
      }
    } catch (err) {
      setError("Failed to connect to server");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Fix Your Code</h2>

      <div className="mb-3">
        <label className="form-label">Select code type:</label>
        <select
          className="form-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
        </select>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows={8}
          placeholder="Paste your code here"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
      </div>

      <button className="btn btn-primary mb-3" onClick={handleFix}>
        Fix Code
      </button>

      {result && (
        <div className="alert alert-success" style={{ whiteSpace: "pre-wrap" }}>
          <strong>✅ Fixed Code:</strong>
          <br />
          {result}
        </div>
      )}

      {error && (
        <div className="alert alert-danger">
          ❌ {error}
        </div>
      )}
    </div>
  );
};

export default FixCode;

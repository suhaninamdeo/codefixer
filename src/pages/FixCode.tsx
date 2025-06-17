import React, { useState } from 'react';
import axios from 'axios';

const FixCode: React.FC = () => {
  const [inputCode, setInputCode] = useState('');
  const [fixedCode, setFixedCode] = useState('');
  const [error, setError] = useState('');
  const [parser, setParser] = useState('babel'); // default to JavaScript (babel)

  const handleFixCode = async () => {
    setError('');
    setFixedCode('');

    try {
      const response = await axios.post('http://codefixer-wine.vercel.app/api/fix', {
        code: inputCode,
        parser: parser
      });

      if (response.data.fixedCode) {
        setFixedCode(response.data.fixedCode);
      } else {
        setError('❌ No formatted code returned');
      }
    } catch (err) {
      console.error(err);
      setError('❌ Failed to format code');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fixedCode);
      alert('✅ Code copied to clipboard!');
    } catch {
      alert('❌ Failed to copy code');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Fix Your Code</h1>

      <div className="mb-2">
        <label>Select code type:</label>
        <select
          className="form-select"
          value={parser}
          onChange={(e) => setParser(e.target.value)}
        >
          <option value="babel">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="css">CSS</option>
          <option value="json">JSON</option>
          <option value="html">HTML</option>
        </select>
      </div>

      <textarea
        className="form-control mb-2"
        rows={8}
        placeholder="Paste your code here"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
      />

      <button className="btn btn-primary mb-2 me-2" onClick={handleFixCode}>
        Fix Code
      </button>

      {fixedCode && (
        <button className="btn btn-secondary mb-2" onClick={handleCopy}>
          Copy Fixed Code
        </button>
      )}

      <textarea
        className="form-control"
        rows={8}
        readOnly
        value={fixedCode || error}
      />
    </div>
  );
};

export default FixCode;

// src/pages/FixCode.tsx
import React, { useState } from 'react';

const FixCode: React.FC = () => {
  const [inputCode, setInputCode] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [fixedCode, setFixedCode] = useState('');
  const [error, setError] = useState('');

  const handleFixCode = async () => {
    setError('');
    setFixedCode('');
    try {
      const response = await fetch('/api/fix-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: inputCode, language }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Server error');
      }
      setFixedCode(data.fixedCode);
    } catch (err: any) {
      setError('❌ ' + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '2rem' }}>
      <h1>Fix Your Code</h1>
      <label>
        Select code type:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>Python</option>
        </select>
      </label>

      <textarea
        rows={8}
        placeholder="Paste your code here"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        style={{ width: '100%', marginTop: '1rem' }}
      />

      <button onClick={handleFixCode} style={{ margin: '1rem 0' }}>
        Fix Code
      </button>

      <textarea
        rows={8}
        readOnly
        value={fixedCode || error}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default FixCode;

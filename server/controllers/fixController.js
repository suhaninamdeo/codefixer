exports.fixCode = (req, res) => {
  const { code } = req.body;

  // For now, just return dummy fixed code
  const fixedCode = `// AI Fixed Code:\n${code.replace("functon", "function")}\nsayHello()\n\n// ✅ Bug fixed successfully.`;

  res.json({ fixedCode });
};

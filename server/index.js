app.post('/api/fix-code', (req, res) => {
  const { code, parser } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    const fixedCode = prettier.format(code, { parser: parser || 'babel' });
    res.json({ fixedCode });
  } catch (err) {
    console.error('Prettier error:', err.message);
    res.status(500).json({ error: 'Failed to format code. Please check your syntax or parser.' });
  }
});

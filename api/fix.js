export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required' });
  }

  // Temporary dummy response
  const fixedCode = `// This is a dummy fixed version of your ${language} code\n${code}`;

  res.status(200).json({ fixedCode });
}

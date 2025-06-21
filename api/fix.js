export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { code, language } = req.body;
    const fixedCode = `// ✅ Fixed by CodeFixer\n${code}`;
    res.status(200).json({ fixedCode });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

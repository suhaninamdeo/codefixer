export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Handle preflight request
    return;
  }

  if (req.method === 'POST') {
    res.status(200).json({ fixedCode: 'console.log("Hello from dummy CodeFixer!");' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

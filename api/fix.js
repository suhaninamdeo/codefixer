export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { code, language } = req.body;

      if (!code || !language) {
        return res.status(400).json({ error: "Missing code or language in request body" });
      }

      // Dummy response for now
      const fixedCode = `// ✅ Fixed by CodeFixer\n${code}`;
      return res.status(200).json({ fixedCode });

    } catch (err) {
      console.error("🔥 Backend Error:", err); // <- very important
      return res.status(500).json({ error: err.message || "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
